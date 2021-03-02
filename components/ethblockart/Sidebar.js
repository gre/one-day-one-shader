import React, { useState } from "react";
import ControlSlider from "./ControlSlider";

const Sidebar = function ({
  mods,
  blockNumber,
  blocks,
  attributes,
  handleBlockChange,
}) {
  const [isVisible, toggleVisibility] = useState(true);
  const handleToggleVisibility = () => {
    toggleVisibility(!isVisible);
  };

  return (
    <>
      <style jsx global>
        {`
          .sidebar {
            width: 225px;
            border-left: #e0e0e0 1px solid;
            background-color: #fff;
            margin-right: 0px;
            transition: margin-right 0.3s ease-in-out;
          }

          .sidebar.hidden {
            margin-right: -225px;
          }

          .sidebar .toggle-button {
            position: fixed;
            top: 0px;
            right: 0px;
            display: inline-block;
            width: 20px;
            height: 20px;
            cursor: pointer;
            padding: 10px;
            z-index: 1;
          }

          .sidebar .toggle-button svg {
            fill: #ccc;
          }

          .sidebar .toggle-button:hover svg {
            fill: #fff;
          }

          .sidebar.hidden .toggle-button {
            transform: rotate(180deg);
          }

          .sidebar.hidden .toggle-button svg {
            fill: #000;
          }

          .sidebar .section-header {
            height: 40px;
            background: #000;
            color: #fff;
            line-height: 40px;
            text-align: center;
            font-size: 16px;
          }

          .sidebar .section-body {
            padding: 20px;
          }

          .sidebar .custom-attribute {
            margin-bottom: 15px;
          }

          .sidebar .content-header {
            display: block;
            font-weight: bold;
            margin: 5px 0;
          }
        `}
      </style>

      <div className={`sidebar ${isVisible ? "" : "hidden"}`}>
        <div className="toggle-button" onClick={handleToggleVisibility}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 484.4 479.2">
            <path d="M382.4 479.2h102V0h-102v479.2zM338 239.6L206.1 126.3v64.9H0v97.9h206.1V353" />
          </svg>
        </div>

        <div className="section-header">Change Block</div>
        <div className="section-body">
          <ControlSlider
            modValue={blockNumber}
            modValueMin="0"
            modValueMax={blocks.length - 1}
            modValueStep="1"
            onChange={(e) => {
              handleBlockChange(e);
            }}
          />
        </div>

        <div className="section-header">Change Style</div>
        <div className="section-body">
          {mods.map(({ key, value, set }) => {
            return (
              <ControlSlider
                key={key}
                controlLabel={key}
                modValue={value}
                onChange={set}
              />
            );
          })}
        </div>

        <div className="section-header">Custom Attributes</div>
        <div className="section-body">
          {attributes.attributes
            ? attributes.attributes.map((attribute, index) => {
                return (
                  <div className="custom-attribute" key={index}>
                    <div className="content-header">{attribute.trait_type}</div>
                    <div>{attribute.value}</div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};
export default Sidebar;
