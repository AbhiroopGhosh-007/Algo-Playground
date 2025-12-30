"use client";
import React from "react";
import { useVisualizer } from "../context/VisualizerContext";
import Node from "./Node";

export default function Grid(){
  const { grid } = useVisualizer();
  return (
    <div style={{overflowX:'auto'}} className="mt-4">
      <div style={{display:"grid", gridTemplateColumns:`repeat(${grid[0].length}, 22px)`}}>
        {grid.flat().map(node => (
          <Node key={`${node.row}-${node.col}`} node={node} />
        ))}
      </div>
    </div>
  );
}
