import { useState } from "react";
import SubHeader from "../subcomponents/SubHeader";
import BookingDetails from "../bookingdetails/BookingDetails";

const AdminDashboard = () => {
  const [mobileNo, setMobileNo] = useState<string>();
  const [isMobileNoEntered, setIsMobileNoEntered] = useState<boolean>(false);

  const onChangeHandlerForMobileNo = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    var updatedMobileNo = e.target.value;
    setMobileNo(updatedMobileNo);
  };

  const fetchBookingDetailsHandler = () => {
    setIsMobileNoEntered(mobileNo);
  };
  return (
    <>
      <SubHeader heading="Admin Dashboard" />
      <div className="flex items-center justify-center mt-5">
        <div className="flex items-center">
          <input
            type="number"
            placeholder="Enter mobile number"
            value={mobileNo}
            onChange={onChangeHandlerForMobileNo}
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm"
          />
          <button
            onClick={fetchBookingDetailsHandler}
            className="mb-4 p-2 bg-blue-500 text-white rounded focus:outline-none focus:ring-2 shadow-sm ml-2 font-medium font-roboto"
          >
            {" "}
            Fetch Details{" "}
          </button>
        </div>
      </div>
      <div className="mt-4">
        {isMobileNoEntered ? <BookingDetails mobileNoProps={mobileNo}  isBookOptionShown = {false} /> : ""}
      </div>
    </>
  );
};

export default AdminDashboard;
