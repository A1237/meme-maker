import React, { useContext } from "react";
import "./template-card.scss";

import { GlobalContext } from "../../globalContext/globalContext";

const TemplateCard = () => {
  const { file } = useContext(GlobalContext);

  return (
    <>
      <div className="template-card">
        <h1 className="template-card__top-text template-card-text">Top Text</h1>
        <img src={file} className="template-card__img" />
        <h1 className="template-card__bottom-text template-card-text">
          Bottom Text
        </h1>
      </div>
    </>
  );
};

export default TemplateCard;
