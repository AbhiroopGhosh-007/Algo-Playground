"use client";
import React, { useState } from "react";
import { useVisualizer } from "../context/VisualizerContext";
import runDijkstra from "../algorithms/dijkstra";
import runAstar from "../algorithms/astar";
import runGreedy from "../algorithms/greedy";
import runBidirectional from "../algorithms/bidirectional";

export default function Controls(){
  const { grid, setGrid, start, finish, isRunning, setIsRunning, speed } = useVisualizer();
  const [algo, setAlgo] = useState("dijkstra");

  async function run() {
    if (isRunning) return;
    setIsRunning(true);
    // Clone grid to pass to algorithms
    const gridClone = grid.map(row => row.map(n => ({
      ...n,
      isWall: !!n.isWall,
      weight: n.weight || 1,
      distance: Infinity,
      visited: false,
      previousNode: null,
      prev: null,
      heuristic: undefined
    })));
    let result = { visitedOrder: [], shortestPath: [] };
    if (algo === "dijkstra") result = runDijkstra(gridClone, start, finish);
    if (algo === "astar") result = runAstar(gridClone, start, finish);
    if (algo === "greedy") result = runGreedy(gridClone, start, finish);
    if (algo === "bidirectional") result = runBidirectional(gridClone, start, finish);

  
    const visited = result?.visitedOrder ?? [];
    const path = result?.shortestPath ?? [];

    // animate visited nodes
    for (let i = 0; i < visited.length; i++) {
      const n = visited[i];
      if (!n) continue;
      highlightNode(n.row, n.col, "visited");
      await wait(speed);
    }

    // animate path
    for (let i = 0; i < path.length; i++) {
      const n = path[i];
      if (!n) continue;
      highlightNode(n.row, n.col, "path");
      await wait(speed);
    }

    setIsRunning(false);
  }

  function highlightNode(r,c,type){
    setGrid(g=>{
      const ng = g.map(row=>row.map(n=>({...n})));
      ng[r][c] = {...ng[r][c], _anim:type};
      return ng;
    });
    // remove animation class after a bit
    setTimeout(()=> {
      setGrid(g=>{
        const ng = g.map(row=>row.map(n=>({...n})));
        if (ng[r][c]) delete ng[r][c]._anim;
        return ng;
      });
    }, 2000);
  }

  function wait(ms){ return new Promise(res=>setTimeout(res, ms)); }

  return (
    <div className="options flex items-center gap-3">
      <select value={algo} onChange={e=>setAlgo(e.target.value)} className="p-2 border">
        <option value="dijkstra">Dijkstra</option>
        <option value="astar">A* Search</option>
        <option value="greedy">Greedy Best-First</option>
        <option value="bidirectional">Bidirectional</option>
      </select>
      <button onClick={run} disabled={isRunning} className="p-2 bg-green-500 text-white rounded">
        Run
      </button>
      <button onClick={()=>setGrid(g=>g.map(row=>row.map(n=>({...n, isWall:false, _anim:undefined}))))} className="clear p-2 border rounded">Clear Walls</button>
      <div>Speed(ms): <input type="range" min="10" max="200" defaultValue={speed} /></div>
    </div>
  );
}
