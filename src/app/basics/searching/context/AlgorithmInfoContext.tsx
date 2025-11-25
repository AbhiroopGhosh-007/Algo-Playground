"use client";
import React, { createContext, useContext, useState } from "react";

const AlgorithmInfoContext = createContext(null);

export const AlgorithmInfoProvider = ({ children }) => {
  const [algorithmInfo, setAlgorithmInfo] = useState("");

  return (
    <AlgorithmInfoContext.Provider value={{ algorithmInfo, setAlgorithmInfo }}>
      {children}
    </AlgorithmInfoContext.Provider>
  );
};

export const useAlgoInfo = () => useContext(AlgorithmInfoContext);
