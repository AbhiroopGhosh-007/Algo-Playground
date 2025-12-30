
"use client";
import "./styles.css"
import React from "react";
import VisualizerProvider from "./context/VisualizerContext";
import Grid from "./components/Grid";
import Controls from "./components/Controls";

export default function VisualizerPage() {
  return (
    <VisualizerProvider>
      <div className="p-10">
        <h1 className="visualizer-heading text-4xl font-bold mb-4">Shortest Path Visualizer</h1>
        
        <Grid />
        <Controls />
      </div>
    </VisualizerProvider>
  );
}
