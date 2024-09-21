"use client";

import React from "react";
import { bubbleSortDescription } from "../components/bubbleSortDescription";
import { bubbleSort } from "@/algorithms/bubbleSort";
import SortingAlg from "../components/SortingAlg";

const BubbleSortPage: React.FC = () => {
  return (
    <SortingAlg sortFunction={bubbleSort} description={bubbleSortDescription} />
  );
};

export default BubbleSortPage;
