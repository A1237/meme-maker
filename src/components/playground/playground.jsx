import React from "react";
import "./playground.scss";
import { ReactComponent as Logo } from "../../assets/upload-solid.svg";

const Playground = () => (
  <div className="playground">
    <input
      type="file"
      name="file"
      id="file"
      className="playground__inputfile"
    />
    <label for="file" className="playground__input-label">
      choose file
      <span className="playground__logo-container">
        <Logo className="playground__logo" />
      </span>
    </label>
  </div>
);

export default Playground;
