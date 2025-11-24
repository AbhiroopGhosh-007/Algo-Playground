export interface AlgorithmInfo {
  name: string;
  execute: SearchAlgorithm;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  bestUses: string[];
  worstUses: string[];
  codeSnippet?: string[];
}

export type SearchAlgorithm = (
  array: number[],
  updateArray: (newArray: number[]) => void,
  updateIndices: (comparing: number[], sorted: number[]) => void,
  incrementComparisons: () => void,
  incrementArrayAccesses: (count?: number) => void,
  animationSpeed: number
) => Promise<number[]>;