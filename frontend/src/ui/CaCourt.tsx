import React from "react";
import { CourtProps } from "../constants/props";

const CaCourt: React.FC<CourtProps> = ({ details, onClickHandler , isSelected }) => {
  const {courtId, courtName} = details;
  return (
    
      <div
        className={`w-32 h-10 border border-gray-300 rounded-lg overflow-hidden flex flex-col ${
        isSelected ? "bg-green-500" : ""}`}
        onClick={() => onClickHandler(courtId)}
        style={{ cursor: "pointer" }}
      >
        <div className="flex-1 flex items-center justify-center">
          <p className="text-sm">{courtName}</p>
        </div>
      </div>
    
  );
};

export default CaCourt;
