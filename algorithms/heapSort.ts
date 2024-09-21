import { SortStep } from "@/types/sortAlgs";

export const heapSort = (array: number[]) => {
  const arr = [...array];
  const steps: SortStep[] = [];

  const heapify = (n: number, i: number) => {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    // If largest is not root
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap

      steps.push({
        description: `Swapped ${arr[i]} and ${arr[largest]}`,
        data: [...arr],
        currentPair: [i, largest],
      });

      // Recursively heapify the affected sub-tree
      heapify(n, largest);
    }
  };

  // Build a maxheap
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr.length, i);
  }

  // One by one extract elements from heap
  for (let i = arr.length - 1; i > 0; i--) {
    // steps.push({
    //   description: `Moving ${arr[0]} to the end of the array`,
    //   data: [...arr],
    //   currentPair: [0, i],
    // });

    // Move current root to end
    [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap

    // steps.push({
    //   description: `Heapifying the root of the reduced heap`,
    //   data: [...arr],
    //   currentPair: [0, i],
    // });

    // Call heapify on the reduced heap
    heapify(i, 0);
  }

  steps.push({
    description: "Array sorted",
    data: [...arr],
    currentPair: [-1, -1],
  });

  return steps;
};
