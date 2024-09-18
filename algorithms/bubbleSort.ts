type SortStep = {
  description: string;
  data: number[];
  currentPair: [number, number];
};

export const bubbleSort = (array: number[]) => {
  const arr = [...array];
  const steps: SortStep[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      steps.push({
        description: `Comparing ${arr[j]} and ${arr[j + 1]}`,
        data: [...arr],
        currentPair: [j, j + 1],
      });

      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        steps.push({
          description: `Swapped ${arr[j]} and ${arr[j + 1]}`,
          data: [...arr],
          currentPair: [j, j + 1],
        });
      }
    }
  }

  steps.push({
    description: "Array sorted",
    data: [...arr],
    currentPair: [-1, -1],
  });

  return steps;
};
