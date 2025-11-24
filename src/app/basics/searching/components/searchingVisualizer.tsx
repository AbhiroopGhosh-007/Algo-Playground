"use client";

import React from "react";
import SearchControls from "./Controls";
import SearchArrayDisplay from "./ArrayDisplay";
import SearchInfoPanel from "./InfoPanel";
import SearchAlgorithmDescriptions from "./AlgorithmDescription";
import { useSearchVisualizer } from "../context/SearchContext";

const SearchingVisualizer = () => {
  const { isSearching } = useSearchVisualizer();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-green-400">
          Searching Algorithm Visualizer
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Visualize how searching algorithms locate values step-by-step.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
            <SearchArrayDisplay />
            <SearchControls />
          </div>

          <div className="mt-8">
            <SearchInfoPanel />
          </div>
        </div>

        <div>
          <SearchAlgorithmDescriptions />
        </div>
      </div>

      {isSearching && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-slate-800 p-4 rounded-lg shadow-lg">
            <p className="text-xl font-medium">Searching in progress...</p>
            <p className="text-sm text-slate-400 mt-2">Please wait or reset.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchingVisualizer;
