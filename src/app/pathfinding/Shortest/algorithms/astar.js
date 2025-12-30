import { getNeighbors, reconstructPath } from "./helpers";

export default function runAstar(grid, start, finish) {
  const startNode = grid[start.row][start.col];
  const finishNode = grid[finish.row][finish.col];

  const openSet = [startNode];
  const visitedOrder = [];

  startNode.distance = 0;
  startNode.heuristic =
    Math.abs(startNode.row - finishNode.row) +
    Math.abs(startNode.col - finishNode.col);

  while (openSet.length) {
    openSet.sort(
      (a, b) => a.distance + a.heuristic - (b.distance + b.heuristic)
    );

    const current = openSet.shift();
    if (current.isWall) continue;

    visitedOrder.push(current);

    if (current === finishNode)
      return {
        visitedOrder,
        shortestPath: reconstructPath(current),
      };

    for (const nb of getNeighbors(current, grid)) {
      const tempG = current.distance + 1;

      if (tempG < nb.distance) {
        nb.distance = tempG;
        nb.heuristic =
          Math.abs(nb.row - finishNode.row) +
          Math.abs(nb.col - finishNode.col);
        nb.previousNode = current;

        if (!openSet.includes(nb)) openSet.push(nb);
      }
    }
  }

  return { visitedOrder, shortestPath: [] };
}
