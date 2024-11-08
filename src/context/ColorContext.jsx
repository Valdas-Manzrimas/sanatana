import React, { createContext } from "react";
import { useColorChange } from "../hooks/useColorChange.js";

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const color = useColorChange();

  return (
    <ColorContext.Provider value={color}>
      {children}
    </ColorContext.Provider>
  );
};

//export default {ColorContext, ColorProvider};