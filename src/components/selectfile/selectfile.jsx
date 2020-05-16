import React, { useContext } from "react";

import "./selectfile.scss";

import { ReactComponent as Logo } from "../../assets/upload-solid.svg";

import { GlobalContext } from "../../globalContext/globalContext";

const SelectFile = () => {
  const { handleFileSelect, modal } = useContext(GlobalContext);
  return (
    <>
      <input
        type="file"
        name="file"
        id="file"
        className="inputfile"
        onChange={handleFileSelect}
      />
      <label htmlFor="file" className="input-label">
        choose file
        <span className="logo-container">
          <Logo className="logo" />
        </span>
      </label>
    </>
  );
};

export default SelectFile;
