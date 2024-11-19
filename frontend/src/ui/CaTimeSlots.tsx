import React from "react";
import { TimeSlotsProps } from "../constants/props";

const CaTimeSlots: React.FC<TimeSlotsProps> = ({
  details,
  onClickHandler,
  isSelected,
}) => {
  const { slotId, slotName, isAvailable } = details;
  return (
    <div>
      <div
        className={`w-32 h-10 border border-gray-300 rounded-lg overflow-hidden flex flex-col ${ isAvailable ? "" : "bg-gray-400"} ${
          isSelected ? "bg-green-500" : "" 
        }`}
        onClick={() => isAvailable && onClickHandler(slotId)}
        style={{ cursor: "pointer" }}
      >
        <div className="flex-1 flex flex-col items-center justify-center space-y-1">
          <p className="text-xs">{slotName}</p>
        </div>
      </div>
    </div>
  );
};

export default CaTimeSlots;
