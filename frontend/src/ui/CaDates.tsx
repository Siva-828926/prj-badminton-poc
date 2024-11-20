import React from "react";
import { DateProps } from "../constants/props";

const CaDates: React.FC<DateProps> = ({
  details,
  onClickHandler,
  isSelected,
}) => {
  const { date, day, displaydate } = details;
  return (
    <div>
      <div
        className={`w-32 h-10 border border-gray-300 rounded-lg overflow-hidden flex flex-col ${
          isSelected ? "bg-green-500" : ""
        }`}
        onClick={() => onClickHandler(date)}
        style={{ cursor: "pointer" }}
      >
        <div className="flex-1 flex flex-col items-center justify-center space-y-1">
          <p className="text-xs">{day}</p>
          <p className="text-xs">{displaydate}</p>
        </div>
      </div>
    </div>
  );
};

export default CaDates;
