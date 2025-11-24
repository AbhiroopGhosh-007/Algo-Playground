export const SEARCH_ALGORITHMS = {
  linear: {
    name: "Linear Search",
    description: "Sequentially checks each element until the target is found.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    bestUses: ["Unsorted arrays", "Small datasets", "Linked lists"],
    worstUses: ["Large datasets"],
    codeSnippet: [
      "function linearSearch(arr, target) {",
      "  for (let i = 0; i < arr.length; i++) {",
      "    if (arr[i] === target) return i;",
      "  }",
      "  return -1;",
      "}"
    ]
  },

  binary: {
    name: "Binary Search",
    description:
      "Efficiently finds the target by repeatedly dividing the sorted array in half.",
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",
    bestUses: ["Sorted arrays", "Large datasets"],
    worstUses: ["Unsorted arrays"],
    codeSnippet: [
      "function binarySearch(arr, target) {",
      "  let left = 0;",
      "  let right = arr.length - 1;",
      "  while (left <= right) {",
      "    const mid = Math.floor((left + right) / 2);",
      "    if (arr[mid] === target) return mid;",
      "    if (arr[mid] < target) left = mid + 1;",
      "    else right = mid - 1;",
      "  }",
      "  return -1;",
      "}"
    ]
  }
};
