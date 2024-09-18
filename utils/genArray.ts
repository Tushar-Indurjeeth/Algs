export const generateArray = (
  length: number = 10,
  maxValue: number = 100
): number[] => {
  return Array.from({ length }, () => Math.floor(Math.random() * maxValue) + 1);
};
