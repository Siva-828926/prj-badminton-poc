import BookingDetails from "../bookingdetails/BookingDetails";
import SubHeader from "../subcomponents/SubHeader";
const BookCourt = () => {
  return (
    <div>
      <SubHeader heading={"Book Court"} />
      <BookingDetails mobileNoProps=""  isBookOptionShown = {true} />

    </div>
  );
};

export default BookCourt;
