// algorithms/dijkstra.js
import { getNeighbors, reconstructPath } from "./helpers";

export default function runDijkstra(grid, start, finish) {
  const visitedOrder = [];
  const startNode = grid[start.row][start.col];
  const finishNode = grid[finish.row][finish.col];

  // initialize distances
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      grid[r][c].distance = Infinity;
      grid[r][c].previousNode = null;
    }
  }

  startNode.distance = 0;
  const pq = [startNode];

  while (pq.length) {
    // simple min by distance
    pq.sort((a,b)=>a.distance-b.distance);
    const current = pq.shift();
    if (!current || current.isWall) continue;

    visitedOrder.push(current);
    if (current.row === finishNode.row && current.col === finishNode.col) {
      const path = reconstructPath(current);
      return { visitedOrder, shortestPath: path };
    }

    // NOTE: pass node first, grid second (matches getNeighbors signature)
    const neighs = getNeighbors(current, grid);
    for (const nb of neighs) {
      const alt = current.distance + (nb.weight || 1);
      if (alt < nb.distance) {
        nb.distance = alt;
        nb.previousNode = current;
        pq.push(nb);
      }
    }
  }

  return { visitedOrder, shortestPath: [] };
}
