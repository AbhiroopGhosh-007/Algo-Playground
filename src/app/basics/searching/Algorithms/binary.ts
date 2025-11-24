export function* binarySearch(array: number[], target: number) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    yield { left, right, mid, comparing: array[mid] };

    if (array[mid] === target) {
      yield { found: true, index: mid };
      return;
    }

    if (array[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  yield { found: false };
}
