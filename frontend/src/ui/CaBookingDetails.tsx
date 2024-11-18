import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaFutbol,
  FaCalendarAlt,
} from "react-icons/fa";
import { CaBookingDetailsProps } from "../constants/props";

const CaBookingDetails: React.FC<CaBookingDetailsProps> = ({
  details,
  cancelHandler,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col justify-between bg-gradient-to-r from-white to-gray-100 w-full">
      <div className="flex flex-col gap-1 mb-2">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-gray-500" />
            <span>{details.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-gray-500" />
            <span>{details.timeSlot}</span>
          </div>
        </div>
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-500" />
            <span>{details.locationName + ", " + details.complexName}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaFutbol className="text-gray-500" />
            <span>{details.courtName}</span>
          </div>
        </div>
      </div>
      {!details.isPast ? (
        <button
          className="self-end mt-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          onClick={() => cancelHandler(details.bookingId)}
        >
          Cancel
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default CaBookingDetails;
