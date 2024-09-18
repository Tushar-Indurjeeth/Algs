import { atom } from "recoil";

export const speedState = atom<number>({
  key: "speedState", // unique ID (with respect to other atoms/selectors)
  default: 4, // default value (aka initial value)
});
