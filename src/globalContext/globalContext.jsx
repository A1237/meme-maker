import React, { useState, createContext } from "react";

export const GlobalContext = createContext({
  topText: "",
  bottomText: "",
  handleFileSelect: () => {},
  handleTextChange: () => {},
});

const GlobalProvider = ({ children }) => {
  const [text, setText] = useState({
    topText: "",
    bottomText: "",
  });

  console.log(text.topText);

  const handleTextChange = (e) => {
    const { name, value } = e.target;

    setText({ ...text, [name]: value });
  };

  const handleFileSelect = (e) => {};

  return (
    <GlobalContext.Provider
      value={{ text, handleTextChange, handleFileSelect }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
