import React from "react";
import { useSearchVisualizer } from "../context/SearchContext";
import { useAlgoInfo } from "../context/AlgorithmInfoContext";
import { Search, Crosshair, RefreshCw } from "lucide-react";

const SearchInfoPanel: React.FC = () => {
  const {
    array,
    currentIndex,
    foundIndex,
    target,
    isSearching,
  } = useSearchVisualizer();

  const { algorithmInfo } = useAlgoInfo();

  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Search className="mr-2" />
        Search Algorithm Statistics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Target */}
        <div className="bg-slate-700 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-slate-400 mb-1">Target</h3>
          <div className="flex items-end gap-2">
            <p className="text-lg font-semibold">
              {target !== null ? target : "N/A"}
            </p>
          </div>
        </div>

        {/* Current Index */}
        <div className="bg-slate-700 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-slate-400 mb-1">
            Current Index
          </h3>
          <div className="flex items-end gap-2">
            <p className="text-lg font-semibold">
              {currentIndex !== null ? currentIndex : "—"}
            </p>
            {isSearching && (
              <RefreshCw size={16} className="text-blue-400 animate-spin" />
            )}
          </div>
        </div>

        {/* Found Index */}
        <div className="bg-slate-700 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-slate-400 mb-1">
            Found At
          </h3>
          <div className="flex items-end gap-2">
            <p className="text-lg font-semibold">
              {foundIndex !== null ? foundIndex : "Not Found"}
            </p>
            {foundIndex !== null && <Crosshair size={16} className="text-green-400" />}
          </div>
        </div>

      </div>

      {/* Complexity Section */}
      <div className="mt-6 bg-slate-700 p-4 rounded-lg">
        <h3 className="text-sm font-medium text-slate-400 mb-1">
          Time Complexity
        </h3>
        <p className="text-lg font-semibold">
          {algorithmInfo?.timeComplexity || "N/A"}
        </p>

        <h3 className="text-sm font-medium text-slate-400 mt-3 mb-1">
          Space Complexity
        </h3>
        <p className="text-lg font-semibold">
          {algorithmInfo?.spaceComplexity || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default SearchInfoPanel;
