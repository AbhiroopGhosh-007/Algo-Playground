import React from "react";
import SearchControls from "./SearchControls";
import SearchArrayDisplay from "./SearchArrayDisplay";
import SearchInfoPanel from "./SearchInfoPanel";
import SearchAlgorithmDescriptions from "./SearchAlgorithmDescriptions";
import { useSearchVisualizer } from "../context/SearchContext";

const SearchingVisualizer = () => {
  const { isSearching } = useSearchVisualizer();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-green-400">
          Searching Algorithm Visualizer
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Explore how search algorithms traverse arrays and identify target
          values with step-by-step visual animations.
        </p>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left section (Visualizer + Controls + Info + Chat) */}
        <div className="lg:col-span-2">

          {/* Array + Controls */}
          <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
            <SearchArrayDisplay />
            <SearchControls />
          </div>

          {/* Info Panel */}
          <div className="mt-8">
            <SearchInfoPanel />
          </div>
        </div>

        {/* Right section — Algorithm Descriptions */}
        <div>
          <SearchAlgorithmDescriptions />
        </div>
      </div>

      {/* Overlay: When Searching */}
      {isSearching && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-slate-800 p-4 rounded-lg shadow-lg">
            <p className="text-xl font-medium">Searching in progress...</p>
            <p className="text-sm text-slate-400 mt-2">
              Please wait or reset to stop
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchingVisualizer;
