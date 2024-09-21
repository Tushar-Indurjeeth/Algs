import React, { useEffect, useState } from "react";
import { generateArray } from "@/utils/genArray";
import { delay } from "@/utils/delay";
import SpeedSelector from "./SpeedSelector";
import { useRecoilValue } from "recoil";
import { speedState } from "@/state/atoms";
import { SortStep } from "@/types/sortAlgs";
import { formatFunctionName } from "@/utils/splitCamelCase";

interface SortingProps {
  sortFunction: (arr: number[]) => SortStep[];
  description: JSX.Element;
}

const SortingAlg: React.FC<SortingProps> = ({ sortFunction, description }) => {
  const [array, setArray] = useState<number[]>([]);
  const [sorting, setSorting] = useState(false);
  const [comparedIndices, setComparedIndices] = useState<number[]>([]);
  const speed = useRecoilValue(speedState);

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

    const steps = sortFunction(array);

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
        <h1 className="title">{formatFunctionName(sortFunction)}</h1>
        {description}
      </div>

      {/* Visual Representation Section */}
      <div className="visualRepContainer">
        <div className="arrayContainer">
          {array.map((value, index) => (
            <div
              key={index}
              className={`arrayContent ${
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
            {sorting ? "Sorting..." : "Start Sorting"}
          </button>
          <button
            onClick={generateNewArray}
            className={`btnNewArray ${
              sorting ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
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

export default SortingAlg;
