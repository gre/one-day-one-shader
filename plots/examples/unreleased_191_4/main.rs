use noise::*;
use clap::Clap;
use gre::*;
use svg::node::element::*;
use svg::node::element::path::Data;

#[derive(Clap)]
#[clap()]
struct Opts {
    #[clap(short, long, default_value = "0.0")]
    seed: f64,
}

#[derive(Clone, Copy, Debug)]
struct VCircle {
    x: f64,
    y: f64,
    r: f64,
}

impl VCircle {
    fn new(x: f64, y: f64, r: f64) -> Self {
        VCircle { x, y, r }
    }
    fn includes(self: &Self, p: (f64, f64)) -> bool {
        euclidian_dist((self.x,self.y), p) < self.r
    }
}

fn shape(
    seed: f64,
    circle: &VCircle
) -> (Vec<Vec<(f64, f64)>>, Vec<f64>) {
    let get_color = image_get_color("images/bitcoin.jpg").unwrap();
    let mut base_y = circle.y + 2. * circle.r;
    let perlin = Perlin::new();
    let mut passage = Passage2DCounter::new(0.4, circle.r * 2.0, circle.r * 2.0);
    let passage_limit = 10;
    let mut height_map: Vec<f64> = Vec::new();
    let boundaries = (circle.x - circle.r, circle.y - circle.r, circle.x + circle.r, circle.y + circle.r);

    let precision = 0.1;
    let w = (2. * circle.r / precision) as u32;
    let h = (2. * circle.r / precision) as u32;
    let f = |(x, y): (f64, f64)| {
        let mut p = (x, y);
        p.0 = p.0 / 0.8 - 0.1;
        p.1 = p.1 / 0.8 - 0.1;
        let c = get_color(p);
        grayscale(c)
    };
    let thresholds: Vec<f64> = vec![0.5];
    let res = contour(w, h, f, &thresholds);
    let mut routes = features_to_routes(res, precision);
    routes = routes.iter().map(|r| r.iter().map(|p| (p.0+boundaries.0, p.1+boundaries.1)).collect()).collect();

    loop {
        if base_y < circle.y - circle.r - 10.0 {
            break;
        }
        let precision = 0.2;
        let mut route = Vec::new();
        let mut x = circle.x - circle.r;
        let mut was_outside = true;
        let mut i = 0;
        loop {
            if x > circle.x + circle.r {
                break;
            }
            let mut y = base_y;
            y += (circle.r - euclidian_dist((circle.x, circle.y), (x, base_y))).max(0.) *
                0.15 * perlin.get([
                    0.1 * x,
                    0.3 * y,
                    seed + 2. * perlin.get([
                        0.1 * y + 0.8 * perlin.get([
                            seed + 1.6 * perlin.get([
                                0.5 * y,
                                0.1 * x,
                                seed / 7.
                            ]),
                            0.8 * y,
                            0.8 * x,
                        ]),
                        0.03 * x,
                        0.6 * seed - 5.
                    ])
                ]);
            let c = f(normalize_in_boundaries((x, y), boundaries));
            
            let mut collides = false;
            if i >= height_map.len() {
                height_map.push(y);
            }
            else {
                if y > height_map[i] {
                    collides = true;
                }
                else {
                    height_map[i] = y;
                }
            }
            let inside = 
                c < 0.5 &&
                !collides &&
                circle.includes((x, y)) &&
                passage.count(( x - circle.x + circle.r, y - circle.y + circle.r )) < passage_limit;
            if inside {
                if was_outside {
                    if route.len() > 2 {
                        routes.push(route);
                    }
                    route = Vec::new();
                }
                was_outside = false;
                route.push((x, y));
            }
            else {
                was_outside = true;
            }
            x += precision;
            i += 1;
        }
        routes.push(route);

        base_y -= 0.45;
    }
    (routes, height_map)
}

type WaveballRes = (Vec<VCircle>, Vec<Vec<(f64, f64)>>);

fn waveball(seed: f64, c: &VCircle) -> WaveballRes {
    let (waves, _height_map) = shape(seed, c);
    (vec![c.clone()], waves)
}

fn art(opts: Opts) -> Vec<Group> {
    let width = 300.0;
    let height = 240.0;
    let pad = 10.0;
    let stroke_width = 0.3;

    let circle = VCircle::new(width/2.0, height/2.0, height / 2.0 - pad);
    let (circles, routes) = waveball(opts.seed, &circle);

    let mut layers = Vec::new();
    let color = "black";
    let mut l = layer(color);
    for c in circles.clone() {
        l = l.add(
            Circle::new()
            .set("r", c.r)
            .set("cx", c.x)
            .set("cy", c.y)
            .set("stroke", color)
            .set(
                "stroke-width",
                stroke_width,
            )
            .set("fill", "none")
            .set("style", "mix-blend-mode: multiply;")
        );
    }
    let mut data = Data::new();
    for r in routes.clone() {
        data = render_route(data, r);
    }
    l = l.add(base_path(color, stroke_width, data));
    l = l.add(signature(
        0.8,
        (185.0, 224.0),
        color,
    ));
    layers.push(l);
    
    layers
    
}

fn main() {
    let opts: Opts = Opts::parse();
    let groups = art(opts);
    let mut document = base_24x30_landscape("white");
    for g in groups {
        document = document.add(g);
    }
    svg::save("image.svg", &document).unwrap();
}
