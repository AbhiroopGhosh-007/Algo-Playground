"use client";
import React from "react";
import { useVisualizer } from "../context/VisualizerContext";

export default function Node({ node }) {
  const { toggleWall } = useVisualizer();

  let classes = "node";

  if (node.isStart) classes += " node-start";
  else if (node.isFinish) classes += " node-finish";
  else if (node.isWall) classes += " node-wall";

  if (node._anim === "visited") classes += " node-visited";
  if (node._anim === "path") classes += " node-path";

  return (
    <div
      className={classes}
      onClick={() => toggleWall(node.row, node.col)}
    ></div>
  );
}
