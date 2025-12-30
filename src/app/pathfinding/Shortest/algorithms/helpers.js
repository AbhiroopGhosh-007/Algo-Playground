// algorithms/helpers.js
export function getNeighbors(node, grid) {
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const neighbors = [];

  for (const [dr, dc] of dirs) {
    const r = node.row + dr;
    const c = node.col + dc;

    if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length) {
      const nb = grid[r][c];
      if (!nb.isWall) neighbors.push(nb);
    }
  }

  return neighbors;
}

export function reconstructPath(endNode) {
  const path = [];
  let cur = endNode;

  while (cur) {
    path.unshift(cur);
    cur = cur.previousNode || cur.prev || null;  // support different algos
  }

  return path;
}

export function manhattan(a, b) {
  return Math.abs(a.row - b.row) + Math.abs(a.col - b.col);
}
