"use client";

import React from "react";
import SortingAlg from "../components/SortingAlg";
import { heapSort } from "@/algorithms/heapSort";
import { heapSortDescription } from "../components/heapSortDescription";

const HeapSortPage: React.FC = () => {
  return (
    <SortingAlg sortFunction={heapSort} description={heapSortDescription} />
  );
};

export default HeapSortPage;
