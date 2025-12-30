import { getNeighbors, reconstructPath } from "./helpers";

export default function runBidirectional(grid, start, finish) {
  const startNode = grid[start.row][start.col];
  const finishNode = grid[finish.row][finish.col];

  const startQueue = [startNode];
  const finishQueue = [finishNode];

  const visitedStart = new Map();   // { "r,c": node }
  const visitedFinish = new Map();  // { "r,c": node }

  const prevStart = new Map();      // predecessors from start
  const prevFinish = new Map();     // predecessors from finish

  const visitedOrder = [];

  const key = (n) => `${n.row},${n.col}`;

  visitedStart.set(key(startNode), startNode);
  visitedFinish.set(key(finishNode), finishNode);

  while (startQueue.length && finishQueue.length) {
    // Expand from START side
    const s = startQueue.shift();
    if (!s.isWall) visitedOrder.push(s);

    for (const nb of getNeighbors(s, grid)) {
      const k = key(nb);
      if (!visitedStart.has(k) && !nb.isWall) {
        visitedStart.set(k, nb);
        prevStart.set(k, s);
        startQueue.push(nb);

        if (visitedFinish.has(k)) {
          // meeting point found
          return {
            visitedOrder,
            shortestPath: mergePaths(nb, prevStart, prevFinish),
          };
        }
      }
    }

    // Expand from FINISH side
    const f = finishQueue.shift();
    if (!f.isWall) visitedOrder.push(f);

    for (const nb of getNeighbors(f, grid)) {
      const k = key(nb);
      if (!visitedFinish.has(k) && !nb.isWall) {
        visitedFinish.set(k, nb);
        prevFinish.set(k, f);
        finishQueue.push(nb);

        if (visitedStart.has(k)) {
          // meeting point found
          return {
            visitedOrder,
            shortestPath: mergePaths(nb, prevStart, prevFinish),
          };
        }
      }
    }
  }

  return { visitedOrder, shortestPath: [] };
}

// Combine the two BFS halves
function mergePaths(meetNode, prevStart, prevFinish) {
  const key = (n) => `${n.row},${n.col}`;

  // Build path backwards to start
  let path1 = [];
  let cur = meetNode;
  while (cur) {
    path1.unshift(cur);
    cur = prevStart.get(key(cur));
  }

  // Build path backwards to finish
  let path2 = [];
  cur = prevFinish.get(key(meetNode));
  while (cur) {
    path2.push(cur);
    cur = prevFinish.get(key(cur));
  }

  return [...path1, ...path2];
}
