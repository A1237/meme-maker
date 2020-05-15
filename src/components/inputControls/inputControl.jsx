import React, { useContext } from "react";
import "./inputControl.scss";

import { GlobalContext } from "../../globalContext/globalContext";

const InputControls = () => {
  const {
    text: { topText, bottomText },
    handleTextChange,
  } = useContext(GlobalContext);

  return (
    <div className="input-controls">
      <h2 className="input-controls__heading">Enter your text</h2>
      <input
        type="text"
        name="topText"
        value={topText}
        className="input-controls__input"
        placeholder="top text"
        onChange={handleTextChange}
      />
      <input
        type="text"
        name="bottomText"
        value={bottomText}
        className="input-controls__input"
        placeholder="bottom text"
        onChange={handleTextChange}
      />
    </div>
  );
};

export default InputControls;
