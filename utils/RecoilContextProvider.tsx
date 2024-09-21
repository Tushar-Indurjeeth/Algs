"use client";

import React, { ReactNode } from "react";
import { RecoilRoot } from "recoil";

interface RecoilContextProviderProps {
  children: ReactNode; // Define the type for children
}

export const RecoilContextProvider: React.FC<RecoilContextProviderProps> = ({
  children,
}) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
