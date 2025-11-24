"use client";

import React from "react";
import SortingVisualizer from "./components/SortingVisualizer";
import { SortingVisualizerProvider } from "./context/SortingContext";
import { AlgorithmInfoProvider } from "./context/AlgorithmInfoContext";

export default function SortingPage() {
  return (
    <SortingVisualizerProvider>
      <AlgorithmInfoProvider>
        <div className="min-h-screen bg-slate-900 text-white">
          <SortingVisualizer />
        </div>
      </AlgorithmInfoProvider>
    </SortingVisualizerProvider>
  );
}
