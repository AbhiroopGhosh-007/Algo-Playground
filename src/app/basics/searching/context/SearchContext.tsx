"use client";

import React, { createContext, useContext, useState } from "react";
import { SEARCH_ALGORITHMS } from "../Algorithms";
import { AlgorithmInfo } from "../types";

type SearchContextType = {
  array: number[];
  setArray: (arr: number[]) => void;

  target: number;
  setTarget: (val: number) => void;

  animationSpeed: number;
  setAnimationSpeed: (val: number) => void;

  isSearching: boolean;
  startSearching: () => void;
  pauseSearching: () => void;
  resetSearching: () => void;

  currentIndex: number | null;
  foundIndex: number | null;

  selectedAlgorithm: string;
  setSelectedAlgorithm: (algo: string) => void;

  algorithmInfo: AlgorithmInfo | null;
  setAlgorithmInfo: (info: AlgorithmInfo | null) => void;
};

const SearchContext = createContext<SearchContextType | null>(null);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [array, setArray] = useState<number[]>([]);
  const [target, setTarget] = useState<number>(0);
  const [animationSpeed, setAnimationSpeed] = useState(5);

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [foundIndex, setFoundIndex] = useState<number | null>(null);

  const [isSearching, setIsSearching] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("linear");

  const [algorithmInfo, setAlgorithmInfo] = useState<AlgorithmInfo | null>(null);

  const startSearching = async () => {
    if (isSearching) return;

    setIsSearching(true);

    const algo = SEARCH_ALGORITHMS[selectedAlgorithm];

    if (!algo || !algo.execute) {
      console.error("EXECUTE FUNCTION NOT FOUND FOR:", selectedAlgorithm);
      setIsSearching(false);
      return;
    }

    await algo.execute({
      array,
      target,
      speed: animationSpeed,
      onIndex: setCurrentIndex,
      onFound: setFoundIndex
    });

    setIsSearching(false);
  };

  const pauseSearching = () => setIsSearching(false);

  const resetSearching = () => {
    setIsSearching(false);
    setCurrentIndex(null);
    setFoundIndex(null);
  };

  return (
    <SearchContext.Provider
      value={{
        array,
        setArray,
        target,
        setTarget,
        animationSpeed,
        setAnimationSpeed,
        isSearching,
        startSearching,
        pauseSearching,
        resetSearching,
        currentIndex,
        foundIndex,
        selectedAlgorithm,
        setSelectedAlgorithm,
        algorithmInfo,
        setAlgorithmInfo
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchVisualizer = () => useContext(SearchContext)!;
