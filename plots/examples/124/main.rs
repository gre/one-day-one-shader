use clap::Clap;
use gre::*;
use noise::*;
use rand::prelude::*;
use svg::node::element::path::Data;
use svg::node::element::*;

fn art(opts: Opts) -> Vec<Group> {
    let height = 210f64;
    let width = 297f64;
    let h = height - 40.;
    let w = width - 40.;
    let granularity = 1f64;
    let counts = [100, 1000];
    let max_count = 3000;
    let divergence = 0.005;
    let freq = 0.1;
    let colors = vec!["black", "slategray"];
    let mut rng = rng_from_seed(opts.seed);
    let get_color =
        image_get_color(opts.path.as_str()).unwrap();
    let perlin = Perlin::new();

    let sx = (width - w) / 2.;
    let sy = (height - h) / 2.;

    let f = |t: f64| {
        // quad
        let a = if t < 0.5 {
            2.0 * t * t
        } else {
            -1.0 + (4.0 - 2.0 * t) * t
        };

        return a * 0.6 + t * 0.4;
    };
    let amp = |p: (f64, f64)| {
        8.0 * (1.
            - grayscale(get_color((
                (p.0 - sx) / w,
                (p.1 - sy) / h,
            ))))
        .powf(2.0)
    };

    let candidates: Vec<Vec<(f64, f64)>> = (0..max_count)
        .map(|i| {
            let mut route = Vec::new();
            let s1 = f(rng.gen_range(0., 1.0));
            let s2 = 1.3 * f(rng.gen_range(0.0, 1.0)) - 0.3;
            let l1 = rng.gen_range(0.1, 0.9);
            if i % 2 == 0 {
                let x = sx + w * s1;
                let y = sy + h * s2;
                let len = h * l1;
                let y_from = y.max(sy);
                let y_to = (y + len).min(sy + h);
                let mut yp = y_from;
                loop {
                    if yp > y_to {
                        break;
                    }
                    let xp = x + amp((x, yp))
                        * (perlin.get([
                            freq * x,
                            freq * yp,
                            opts.seed
                                + i as f64 * divergence,
                        ]) + 0.3
                            * perlin.get([
                                2. * freq * x,
                                2. * freq * yp,
                                100. + opts.seed
                                    + i as f64 * divergence,
                            ]));
                    route.push((xp, yp));
                    yp += granularity;
                }
            } else {
                let x = sx + w * s2;
                let y = sy + h * s1;

                let len = w * l1;
                let x_from = x.max(sx);
                let x_to = (x + len).min(sx + w);
                let mut xp = x_from;
                loop {
                    if xp > x_to {
                        break;
                    }
                    let yp = y + amp((xp, y))
                        * (perlin.get([
                            freq * xp,
                            freq * y,
                            -opts.seed
                                - i as f64 * divergence,
                        ]) + 0.3
                            * perlin.get([
                                2. * freq * xp,
                                2. * freq * y,
                                -100.
                                    - opts.seed
                                    - i as f64 * divergence,
                            ]));
                    route.push((xp, yp));
                    xp += granularity;
                }
            }
            route
        })
        .filter(|r| r.len() >= 2)
        .collect();

    colors
        .iter()
        .enumerate()
        .map(|(g, color)| {
            let count = counts[g];
            let mut routes = candidates.clone();
            rng.shuffle(&mut routes);
            routes.truncate(count);
            let data = routes.iter().fold(
                Data::new(),
                |data, route| {
                    render_route(data, route.clone())
                },
            );
            let mut l = layer(color);
            l = l.add(base_path(color, 0.3, data));
            if g == colors.len() - 1 {
                l = l.add(signature(
                    1.0,
                    (250.0, 192.0),
                    color,
                ));
            }
            l
        })
        .collect()
}

#[derive(Clap)]
#[clap()]
struct Opts {
    #[clap(
        short,
        long,
        default_value = "images/man_jump.jpg"
    )]
    path: String,
    #[clap(short, long, default_value = "0.0")]
    seed: f64,
}

fn main() {
    let opts: Opts = Opts::parse();
    let groups = art(opts);
    let mut document = base_a4_landscape("white");
    for g in groups {
        document = document.add(g);
    }
    svg::save("image.svg", &document).unwrap();
}