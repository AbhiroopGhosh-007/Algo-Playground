"use client";

import React from "react";
import SearchingVisualizer from "./components/SearchingVisualizer";
import { SearchProvider } from "./context/SearchContext";
import { AlgorithmInfoProvider } from "./context/AlgorithmInfoContext";

export default function SearchingPage() {
  return (
    <SearchProvider>
      <AlgorithmInfoProvider>
        <div className="min-h-screen bg-slate-900 text-white">
          <SearchingVisualizer />
        </div>
      </AlgorithmInfoProvider>
    </SearchProvider>
  );
}
