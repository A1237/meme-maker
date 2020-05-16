import React, { useState, createContext } from "react";

export const GlobalContext = createContext({
  topText: "",
  bottomText: "",
  file: null,
  modal: false,
  template: false,
  handleFileSelect: () => {},
  handleTextChange: () => {},
  handleUnsetModel: () => {},
});

const GlobalProvider = ({ children }) => {
  const [text, setText] = useState({
    topText: "",
    bottomText: "",
  });

  const [file, setFile] = useState(null);

  const [modal, setModal] = useState(false);

  console.log(text.topText);

  const handleTextChange = (e) => {
    const { name, value } = e.target;

    setText({ ...text, [name]: value });
  };

  const handleFileSelect = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setModal(!modal);
  };

  const handleUnsetModel = () => {
    setModal(!modal);
  };

  return (
    <GlobalContext.Provider
      value={{
        text,
        handleTextChange,
        handleFileSelect,
        modal,
        file,
        handleUnsetModel,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
