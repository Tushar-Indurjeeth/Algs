"use client";

import React from "react";
import SortingAlg from "../components/SortingAlg";
import { selectionSortDescription } from "../components/selectionSortDescription";
import { selectionSort } from "@/algorithms/selectionSort";

const SelectionSortPage: React.FC = () => {
  return (
    <SortingAlg
      sortFunction={selectionSort}
      description={selectionSortDescription}
    />
  );
};

export default SelectionSortPage;
