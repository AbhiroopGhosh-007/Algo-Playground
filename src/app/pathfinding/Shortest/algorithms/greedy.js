// algorithms/greedy.js  (rename file to this)
import { getNeighbors, reconstructPath } from "./helpers";

export default function runGreedy(grid, start, finish) {
  const startNode = grid[start.row][start.col];
  const finishNode = grid[finish.row][finish.col];

  const openSet = [startNode];
  const visitedOrder = [];

  // initialize distances/flags
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      grid[r][c].visited = false;
      grid[r][c].previousNode = null;
    }
  }

  startNode.visited = true;
  startNode.heuristic =
    Math.abs(startNode.row - finishNode.row) +
    Math.abs(startNode.col - finishNode.col);

  while (openSet.length) {
    openSet.sort((a, b) => a.heuristic - b.heuristic);
    const current = openSet.shift();

    if (!current || current.isWall) continue;

    visitedOrder.push(current);

    if (current === finishNode)
      return {
        visitedOrder,
        shortestPath: reconstructPath(current),
      };

    for (const nb of getNeighbors(current, grid)) {
      if (!nb.visited) {
        nb.visited = true;
        nb.heuristic =
          Math.abs(nb.row - finishNode.row) +
          Math.abs(nb.col - finishNode.col);
        nb.previousNode = current;
        openSet.push(nb);
      }
    }
  }

  return { visitedOrder, shortestPath: [] };
}
