"use client";

import React from "react";
import { useAlgorithmInfo } from "../context/AlgorithmInfoContext";
import { InfoIcon } from "lucide-react";

const SearchingAlgorithmDescriptions: React.FC = () => {
  const { algorithmInfo } = useAlgorithmInfo();

  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg h-full">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <InfoIcon className="mr-2" />
        Algorithm Information
      </h2>

      {algorithmInfo ? (
        <div>
          {/* Algorithm Name */}
          <h3 className="text-lg font-semibold text-blue-400 mb-2">
            {algorithmInfo.name}
          </h3>

          {/* Description */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-slate-400 mb-1">
              Description
            </h4>
            <p className="text-slate-300">
              {algorithmInfo.description}
            </p>
          </div>

          {/* Time/Space Complexity */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="text-sm font-medium text-slate-400 mb-1">
                Time Complexity
              </h4>
              <p className="text-slate-300">
                {algorithmInfo.timeComplexity}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-slate-400 mb-1">
                Space Complexity
              </h4>
              <p className="text-slate-300">
                {algorithmInfo.spaceComplexity}
              </p>
            </div>
          </div>

          {/* Best Uses */}
          {algorithmInfo.bestUses && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-slate-400 mb-1">
                Best Use Cases
              </h4>
              <ul className="list-disc list-inside text-slate-300">
                {algorithmInfo.bestUses.map((use: string, index: number) => (
                  <li key={index}>{use}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Worst Uses */}
          {algorithmInfo.worstUses && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-slate-400 mb-1">
                Worst Use Cases
              </h4>
              <ul className="list-disc list-inside text-slate-300">
                {algorithmInfo.worstUses.map((use: string, index: number) => (
                  <li key={index}>{use}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Code Snippet */}
          {algorithmInfo.codeSnippet && (
            <div>
              <h4 className="text-sm font-medium text-slate-400 mb-1">
                Code Example
              </h4>

              <pre className="bg-slate-900 p-4 rounded-lg overflow-x-auto text-slate-200 text-sm">
                <code>
                  {algorithmInfo.codeSnippet.map((line: string, i: number) => (
                    <div key={i}>{line}</div>
                  ))}
                </code>
              </pre>
            </div>
          )}
        </div>
      ) : (
        <p className="text-slate-400">
          Select an algorithm to view information
        </p>
      )}
    </div>
  );
};

export default SearchingAlgorithmDescriptions;
