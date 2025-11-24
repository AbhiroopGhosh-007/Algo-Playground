import React, { useState, useEffect } from "react";
import {
  Play, Pause, RefreshCw,
  Clock, ChevronUp, ChevronDown, Search
} from "lucide-react";

import { useSearchVisualizer } from "../context/SearchContext";
import { useAlgoInfo } from "../context/AlgorithmInfoContext";
import { SEARCH_ALGORITHMS } from "../Algorithms"; // Linear & Binary search info

const Controls: React.FC = () => {
  const {
    array,
    setArray,
    animationSpeed,
    setAnimationSpeed,
    isSearching,
    startSearching,
    pauseSearching,
    resetSearching,
    target,
    setTarget,
  } = useSearchVisualizer();

  // Keep selectedAlgorithm local when the context doesn't provide it.
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>(
    Object.keys(SEARCH_ALGORITHMS)[0] ?? ""
  );

  const { setAlgorithmInfo } = useAlgoInfo();

  // Ensure algorithm info is set when selectedAlgorithm changes or on mount.
  useEffect(() => {
    if (selectedAlgorithm) {
      setAlgorithmInfo(SEARCH_ALGORITHMS[selectedAlgorithm]);
    }
  }, [selectedAlgorithm, setAlgorithmInfo]);

  const generateNewArray = () => {
    const newArr = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 100)
    );
    setArray(newArr);
  };

  const handleAlgorithmChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const algo = e.target.value;
    setSelectedAlgorithm(algo);
    setAlgorithmInfo(SEARCH_ALGORITHMS[algo]);
  };

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left column */}
      <div className="space-y-4">

        {/* Target Input */}
        <div>
          <label className="block mb-2 text-sm font-medium">Target Value</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={target}
              onChange={(e) => setTarget(Number(e.target.value))}
              className="px-3 py-2 bg-slate-700 border border-slate-600 rounded-md w-full"
              disabled={isSearching}
            />
            <Search className="text-slate-300" size={20} />
          </div>
        </div>

        {/* Animation Speed */}
        <div>
          <label htmlFor="speed" className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Animation Speed</span>
            <div className="flex gap-1">
              <button
                onClick={() => setAnimationSpeed(Math.max(1, animationSpeed - 1))}
                className="p-1 text-slate-400 hover:text-white"
                disabled={isSearching}
              >
                <Clock size={16} />
              </button>
              <button
                onClick={() => setAnimationSpeed(Math.min(10, animationSpeed + 1))}
                className="p-1 text-slate-400 hover:text-white"
                disabled={isSearching}
              >
                <Clock size={16} className="rotate-90" />
              </button>
            </div>
          </label>

          <input
            type="range"
            id="speed"
            min="1"
            max="10"
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg"
            disabled={isSearching}
          />
        </div>
      </div>

      {/* Right column */}
      <div className="space-y-4">

        {/* Select Algorithm */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Select Algorithm
          </label>

          <select
            value={selectedAlgorithm}
            onChange={handleAlgorithmChange}
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md"
            disabled={isSearching}
          >
            {Object.keys(SEARCH_ALGORITHMS).map((key) => (
              <option key={key} value={key}>
                {SEARCH_ALGORITHMS[key].name}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2 mt-4">
          <button
            onClick={generateNewArray}
            className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-md"
            disabled={isSearching}
          >
            <RefreshCw size={16} />
            <span>New Array</span>
          </button>

          {!isSearching ? (
            <button
              onClick={startSearching}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md"
            >
              <Play size={16} />
              <span>Start</span>
            </button>
          ) : (
            <>
              <button
                onClick={pauseSearching}
                className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded-md"
              >
                <Pause size={16} />
                <span>Pause</span>
              </button>

              <button
                onClick={resetSearching}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-500 rounded-md"
              >
                <RefreshCw size={16} />
                <span>Reset</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Controls;
