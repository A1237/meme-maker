import React, { useContext } from "react";
import "./text-image-card.scss";
import { GlobalContext } from "../../globalContext/globalContext";

const TextonImageCard = () => {
  const { file } = useContext(GlobalContext);
  return (
    <>
      <div
        className="textonImagecard"
        style={{ backgroundImage: `url(${file})` }}
      >
        <h1 className="textonImagecard__text text-upper" draggable>
          upper text
        </h1>
        {/* <img src={file} className="textonImagecard__img" /> */}
        <h1 className="textonImagecard__text text-lower" draggable>
          lower text
        </h1>
      </div>
    </>
  );
};

export default TextonImageCard;
