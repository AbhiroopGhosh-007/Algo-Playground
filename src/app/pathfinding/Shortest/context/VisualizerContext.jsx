"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const VisualizerContext = createContext();

export function useVisualizer() { return useContext(VisualizerContext); }

const defaultRows = 20, defaultCols = 40;
const startPos = {row: 10, col: 8};
const finishPos = {row: 10, col: 32};

function createNode(row, col) {
  return {
    row, col,
    isStart: row === startPos.row && col === startPos.col,
    isFinish: row === finishPos.row && col === finishPos.col,
    isWall: false,
    weight: 1,
    distance: Infinity,
    prev: null,
  };
}

function buildGrid(rows=defaultRows, cols=defaultCols) {
  const grid = [];
  for (let r=0;r<rows;r++){
    const row = [];
    for (let c=0;c<cols;c++) row.push(createNode(r,c));
    grid.push(row);
  }
  return grid;
}

export default function VisualizerProvider({ children }) {
  const [grid,setGrid] = useState(() => buildGrid());
  const [start,setStart] = useState(startPos);
  const [finish,setFinish] = useState(finishPos);
  const [isRunning,setIsRunning] = useState(false);
  const [speed,setSpeed] = useState(20); // ms per step

  function toggleWall(r,c){
    setGrid(g => {
      const ng = g.map(row => row.map(n => ({...n})));
      ng[r][c].isWall = !ng[r][c].isWall;
      return ng;
    });
  }

  function resetGrid(){
    setGrid(buildGrid());
  }

  return (
    <VisualizerContext.Provider value={{
      grid, setGrid, start, setStart, finish, setFinish,
      isRunning, setIsRunning, speed, setSpeed,
      toggleWall, resetGrid
    }}>
      {children}
    </VisualizerContext.Provider>
  );
}
