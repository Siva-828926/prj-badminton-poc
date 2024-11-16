import { useState } from "react";
import { IBookingDetails } from "../../constants/Data";

const UserDashboard = () => {
  const [mobileNo, setMobileNo] = useState();
  const [bookingDetails, setBookingDetails] = useState<IBookingDetails[]>();

  return (
    <>
      <div>
        <input type="number" placeholder="Enter mobile number" />
      </div>
      <div></div>
    </>
  );
};

export default UserDashboard;
