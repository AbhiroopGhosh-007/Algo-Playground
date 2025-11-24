"use client";
import React, { createContext, useContext, useState } from "react";

const AlgorithmInfoContext = createContext(null);

export const AlgorithmInfoProvider = ({ children }) => {
  const [description, setDescription] = useState("");

  return (
    <AlgorithmInfoContext.Provider value={{ description, setDescription }}>
      {children}
    </AlgorithmInfoContext.Provider>
  );
};

export const useAlgoInfo = () => useContext(AlgorithmInfoContext);
