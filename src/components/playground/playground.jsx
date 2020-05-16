import React, { useContext } from "react";
import "./playground.scss";

import Backdrop from "../backdrop/backdrop";
import Modal from "../modal/modal";
import SelectFile from "../selectfile/selectfile";

import { GlobalContext } from "../../globalContext/globalContext";

const Playground = () => {
  const { modal } = useContext(GlobalContext);

  return (
    <div className={`playground ${modal ? "backdrop" : ""}`}>
      {modal ? <Modal /> : <SelectFile />}
    </div>
  );
};

export default Playground;
