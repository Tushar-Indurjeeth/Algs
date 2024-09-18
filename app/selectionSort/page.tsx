"use client";

import React, { useEffect, useState } from "react";
import { generateArray } from "@/utils/genArray";
import { selectionSort } from "@/algorithms/selectionSort";
import { delay } from "@/utils/delay";
import SpeedSelector from "../components/SpeedSelector";
import { useRecoilValue } from "recoil";
import { speedState } from "@/state/atoms";
import { selectionSortDescription } from "../components/selectionSortDescription";

const SelectionSort: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [sorting, setSorting] = useState(false);
  const [comparedIndices, setComparedIndices] = useState<number[]>([]);
  const speed = useRecoilValue(speedState);

  // Call the external generateArray function
  const generateNewArray = () => {
    const newArr = generateArray(10, 100);
    setArray(newArr);
    setComparedIndices([]);
    setSorting(false);
  };

  useEffect(() => {
    generateNewArray();
  }, []);

  const sort = async () => {
    setSorting(true);

    const steps = selectionSort(array);

    for (let i = 0; i < steps.length; i++) {
      setArray(steps[i].data);
      setComparedIndices(steps[i].currentPair);
      await delay(speed);
    }

    setSorting(false);
    setComparedIndices([]);
  };

  return (
    <div className="mainContainer">
      <div className="descriptionContainer">
        {/* Description Section */}
        <h1 className="title">Selection Sort</h1>
        {selectionSortDescription}
      </div>

      {/* Visual Representation Section */}
      <div className="visualRepContainer">
        <div className="arrayContainer">
          {array.map((value, index) => (
            <div
              key={index}
              className={`w-6 bg-blue-500 text-white flex items-end justify-center text-sm font-bold ${
                comparedIndices.includes(index) ? "bg-red-500" : "bg-blue-500"
              } `}
              style={{ height: `${value * 3}px` }} // Dynamically adjust height
            >
              {value}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="buttonContainer">
          <button
            onClick={sorting ? undefined : sort}
            className={`buttonSort ${
              sorting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={sorting}
          >
            {sorting ? "Sorting..." : "Start Selection Sort"}
          </button>
          <button
            onClick={generateNewArray}
            className={`btnNewArray ${
              sorting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={sorting}
          >
            Generate New Array
          </button>
          <div className="mt-4 py-2">
            <SpeedSelector disabled={sorting} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionSort;
