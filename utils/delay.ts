// app/utils/delay.ts
export const delay = async (speed: number) => {
  return new Promise((resolve) => setTimeout(resolve, 2000 / speed));
};
