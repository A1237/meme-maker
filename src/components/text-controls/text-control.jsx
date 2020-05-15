import React from "react";

import "./text-control.scss";

const TextControls = () => {
  return (
    <div className="text-control">
      <select value="lato" className="text-control__font-select">
        <option value="Lato" className="text-control__font-option">
          lato
        </option>
        <option value="Indie Flower" className="text-control__font-option">
          Indie Flower
        </option>
        <option value="Pangolin" className="text-control__font-option">
          pangolin
        </option>
        <option value="Roboto" className="text-control__font-option">
          roboto
        </option>
      </select>

      <div className="logo">
        {/* <div>
          <i class="fas fa-align-left"></i>
        </div>
        <div>
          <i class="fas fa-align-right"></i>
        </div>
        <div>
          <i class="fas fa-align-center"></i>
        </div>
        <div>
          <i class="fas fa-align-right"></i>
        </div> */}
      </div>
    </div>
  );
};

export default TextControls;
