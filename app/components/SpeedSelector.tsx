import { speedState } from "@/state/atoms";
import React from "react";
import { useRecoilState } from "recoil";

interface SpeedSelectorProps {
  disabled: boolean; // Define the type for the disabled prop
}

const SpeedSelector: React.FC<SpeedSelectorProps> = ({ disabled }) => {
  const [selectedSpeed, setSelectedSpeed] = useRecoilState(speedState);
  const speeds = [1, 2, 3, 4];

  return (
    <div className="flex flex-col items-center p-3 border rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Speed</h2>
      <div className="flex space-x-4">
        {speeds.map((speed) => (
          <button
            key={speed}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              selectedSpeed === speed
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            } ${disabled ? "bg-gray-500 text-gray-800" : ""} `}
            onClick={() => setSelectedSpeed(speed)}
            disabled={disabled}
          >
            {`${speed}x`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpeedSelector;
