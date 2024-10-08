import { SortStep } from "@/types/sortAlgs";

export const bubbleSort = (array: number[]) => {
  const arr = [...array];
  const steps: SortStep[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      steps.push({
        description: `Comparing ${arr[j]} and ${arr[j + 1]}`,
        data: [...arr],
        currentPair: [j, j + 1],
        algName: "Bubble Sort",
      });

      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        steps.push({
          description: `Swapped ${arr[j]} and ${arr[j + 1]}`,
          data: [...arr],
          currentPair: [j, j + 1],
          algName: "Bubble Sort",
        });
      }
    }
  }

  steps.push({
    description: "Array sorted",
    data: [...arr],
    currentPair: [-1, -1],
    algName: "Bubble Sort",
  });

  return steps;
};
