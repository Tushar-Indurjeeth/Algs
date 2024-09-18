type SortStep = {
  description: string;
  data: number[];
  currentPair: [number, number];
};

export const selectionSort = (array: number[]) => {
  const arr = [...array];
  const steps: SortStep[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      steps.push({
        description: `Comparing ${arr[min]} and ${arr[j]}`,
        data: [...arr],
        currentPair: [min, j],
      });

      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // Swap the found minimum element with the first element of the unsorted part
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }

    steps.push({
      description: `Swapped ${arr[min]} and ${arr[i]}`,
      data: [...arr],
      currentPair: [i, min],
    });
  }

  steps.push({
    description: "Array sorted",
    data: [...arr],
    currentPair: [-1, -1],
  });

  return steps;
};
