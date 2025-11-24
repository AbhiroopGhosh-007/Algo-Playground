import { SearchAlgorithm } from '../types';

export function* linearSearch(array: number[], target: number) {
  for (let i = 0; i < array.length; i++) {
    yield { currentIndex: i, comparing: array[i] };
    if (array[i] === target) {
      yield { found: true, index: i };
      return;
    }
  }
  yield { found: false };
}
