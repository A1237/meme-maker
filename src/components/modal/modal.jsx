import React from "react";
import "./modal.scss";

import TextonImageCard from "../text-image-card/text-image-card";
import TemplateCard from "../template-card/template-card";

const Modal = () => {
  return (
    <div className="modal">
      <TextonImageCard />
      <TemplateCard />
    </div>
  );
};

export default Modal;
