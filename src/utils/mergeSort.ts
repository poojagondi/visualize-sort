export interface SortStep {
  array: number[];
  left: number[];
  right: number[];
  merged: number[];
}

export const mergeSort = (
  array: number[],
  steps: SortStep[] = []
): number[] => {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, middle), steps);
  const right = mergeSort(array.slice(middle), steps);

  const merged = merge(left, right);
  steps.push({
    array: [...array],
    left: [...left],
    right: [...right],
    merged: [...merged],
  });
  return merged;
};

const merge = (left: number[], right: number[]): number[] => {
  let result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};
