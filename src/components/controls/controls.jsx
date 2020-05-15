import React from "react";
import "./controls.scss";

import InputControls from "../inputControls/inputControl";
import TextControls from "../text-controls/text-control";

const Controls = () => (
  <div className="controls">
    <InputControls />
    <TextControls />
  </div>
);

export default Controls;
