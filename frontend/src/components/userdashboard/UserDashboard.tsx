import { useState } from "react";
import {
  IBookingDetails,
  IBookingDetailsList,
  ICancelBooking,
} from "../../constants/Data";
import * as ApiService from "../../service/ApiService";
import CaBookingDetails from "../../ui/CaBookingDetails";
import { toast } from "react-toastify";
import SubHeader from "../subcomponents/SubHeader";

const UserDashboard = () => {
  const [mobileNo, setMobileNo] = useState<number>();
  const [bookingDetails, setBookingDetails] = useState<IBookingDetails[]>();

  const fetchBookingDetailsHandler = () => {
    console.log("Fetching details for ", mobileNo);
    getBookingDetails(mobileNo);
  };

  const getBookingDetails = (mobileNo: number) => {
    ApiService.getBookingDetails(mobileNo).then((res: IBookingDetailsList) => {
      setBookingDetails(res.bookingDetailsList);
    });
  };

  const cancelBookingHandler = (bookingId: number) => {
    console.log("Cancelling booking for id ", bookingId);
    ApiService.cancelBooking(bookingId).then((res: ICancelBooking) => {
      toast.success(res.msg);
      getBookingDetails(mobileNo)
    });
  };

  const onChangeHandlerForMobileNo = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMobileNo(Number(e.target.value));
  };

  return (
    <>
      <SubHeader heading = "User Dashboard" />
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
            className="mb-4 p-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm ml-2"
          >
            {" "}
            Fetch Details{" "}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        {bookingDetails?.map((data) => (
          <CaBookingDetails
            details={data}
            cancelHandler={cancelBookingHandler}
          />
        ))}
      </div>
    </>
  );
};

export default UserDashboard;
