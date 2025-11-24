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
};

const SearchContext = createContext<SearchContextType | null>(null);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [array, setArray] = useState<number[]>([]);
  const [target, setTarget] = useState<number>(0);

  const [animationSpeed, setAnimationSpeed] = useState(5);

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [foundIndex, setFoundIndex] = useState<number | null>(null);

  const [isSearching, setIsSearching] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("linearSearch");

  let searchProcess: NodeJS.Timeout | null = null;

  const startSearching = async () => {
    if (isSearching) return;
    setIsSearching(true);

    const algo = SEARCH_ALGORITHMS[selectedAlgorithm];

    await algo.execute(
      array,
      setArray,
      (idx) => setCurrentIndex(idx[0] ?? null),
      (found) => setFoundIndex(found[0] ?? null),
      () => {},
      () => {},
      animationSpeed
    );

    setIsSearching(false);
  };

  const pauseSearching = () => {
    setIsSearching(false);
    if (searchProcess) clearTimeout(searchProcess);
  };

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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchVisualizer = () => useContext(SearchContext)!;
