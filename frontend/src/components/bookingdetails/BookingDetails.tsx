import * as ApiService from "../../service/ApiService";
import { useEffect, useState } from "react";
import {
  IBookingForm,
  IComplexes,
  ICourts,
  ILocation,
  ITimeSlots,
} from "../../constants/Data";
import CaComplex from "../../ui/CaComplex";
import CaCourt from "../../ui/CaCourt";
import { DateFormat, generateDates } from "../../util/DateService";
import CaDates from "../../ui/CaDates";
import CaTimeSlots from "../../ui/CaTimeSlots";
import { toast } from "react-toastify";

const BookingDetails: React.FC<any> = ({
  mobileNoProps,
  isBookOptionShown,
}) => {
  const [locationList, setLocationList] = useState<ILocation[]>([]);
  const [complexList, setComplexList] = useState<IComplexes[]>([]);
  const [courtList, setCourtList] = useState<ICourts[]>([]);
  const [dateList, setDateList] = useState<DateFormat[]>([]);
  const [timeSlotList, settimeSlotList] = useState<ITimeSlots[]>([]);
  const [mobileNo, setMobileNo] = useState<string>("");
  const [isShown, setIsShown] = useState<boolean>(isBookOptionShown);

  const [selectedLocation, setSelectedLocation] = useState<number>();
  const [selectedComplex, setSelectedComplex] = useState<number>();
  const [selectedCourt, setSelectedCourt] = useState<number>();
  const [selectedDate, setSelectedDate] = useState<string>();
  const [selectedTime, setSelectedTime] = useState<number>();

  const [bookingDetails, setBookingDetails] = useState<IBookingForm>();

  const fetchLocationDetails = () => {
    ApiService.fetchLocation(mobileNoProps).then((res) => {
      setLocationList(res.locationList);
    });
  };

  const onChangeLocationHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newSelectedLocation = Number(event.target.value);
    setSelectedLocation(newSelectedLocation);
    setSelectedComplex(undefined);
    setSelectedCourt(undefined);
    setSelectedDate(undefined);
    setSelectedTime(undefined);
    ApiService.fetchComplexes(Number(newSelectedLocation)).then((res) => {
      setComplexList(res.complexList);
    });
  };

  const onClickComplexHandler = (complexId: number) => {
    setSelectedCourt(undefined);
    setSelectedDate(undefined);
    setSelectedTime(undefined);
    setSelectedComplex(complexId);
    ApiService.fetchCourts(Number(complexId)).then((res) => {
      setCourtList(res.courtList);
    });
  };

  const onClickCourtHandler = (courtId: number) => {
    setSelectedDate(undefined);
    setSelectedTime(undefined);
    setSelectedCourt(courtId);
    setDateList(generateDates());
  };

  const onClickDateHandler = (date: string) => {
    setSelectedTime(undefined);
    setSelectedDate(date);
    ApiService.fetchAvailableSlots(
      selectedLocation,
      selectedComplex,
      selectedCourt,
      date
    ).then((res) => {
      settimeSlotList(res.availableslots);
    });
  };

  const onClickTimeHandler = (time: number) => {
    setSelectedTime(time);
  };

  const onChangeHandlerForMobileNo = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMobileNo(e.target.value);
  };

  useEffect(() => {
    fetchLocationDetails();
    setIsShown(isBookOptionShown);
  }, []);

  const bookCourtHandler = () => {
    const values = {
      locationId: selectedLocation,
      complexId: selectedComplex,
      courtId: selectedCourt,
      date: selectedDate,
      timeSlot: selectedTime,
      mobileNo: mobileNo,
    };
    setBookingDetails(values);
    ApiService.bookCourt(values).then((res) => {
      toast.success(res.serviceMsg);
      setSelectedLocation(undefined);
      setSelectedComplex(undefined);
      setSelectedCourt(undefined);
      setSelectedDate(undefined);
      setSelectedTime(undefined);
      fetchLocationDetails();
    });
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4 w-full mt-2">
        <h3 className="mr-4 text-right w-1/3 bold">Select Location</h3>
        <select
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm w-1/3"
          onChange={(e) => onChangeLocationHandler(e)}
        >
          <option value="0">--Select Location--</option>
          {locationList.map((data, index) => (
            <option value={data.locationId}> {data.locationName}</option>
          ))}
        </select>
        <div className="w-1/3"></div>
      </div>

      {selectedLocation ? (
        <div className="flex items-center justify-between mb-4 w-full mt-2">
          <h3 className="mr-4 text-right w-1/3 bold">Select Complex</h3>
          <div className="w-2/3 flex flex-wrap gap-1 justify-start">
            {complexList.map((data, index) => (
              <CaComplex
                key={index}
                details={data}
                onClickHandler={onClickComplexHandler}
                isSelected={selectedComplex === data.id}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}

      {selectedComplex ? (
        <div className="flex items-center justify-between mb-4 w-full mt-2">
          <h3 className="mr-4 text-right w-1/3 bold">Select Court</h3>
          <div className="w-2/3 flex flex-wrap gap-1 justify-start">
            {courtList.map((data, index) => (
              <CaCourt
                key={index}
                details={data}
                onClickHandler={onClickCourtHandler}
                isSelected={selectedCourt === data.courtId}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}

      {selectedCourt ? (
        <div className="flex items-center justify-between mb-4 w-full mt-2">
          <h3 className="mr-4 text-right w-1/3 bold">Select Date</h3>
          <div className="w-2/3 flex flex-wrap gap-1 justify-start">
            {dateList.map((data, index) => (
              <CaDates
                key={index}
                details={data}
                isSelected={selectedDate === data.date}
                onClickHandler={onClickDateHandler}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}

      {selectedDate ? (
        <div className="flex items-center justify-between mb-4 w-full mt-2">
          <h3 className="mr-4 text-right w-1/3 bold">Select Time</h3>
          <div className="w-2/3 flex flex-wrap gap-1 justify-start">
            {timeSlotList.map((data, index) => (
              <CaTimeSlots
                key={index}
                details={data}
                isSelected={selectedTime === data.slotId}
                isShown = {isShown}
                onClickHandler={onClickTimeHandler}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}

      {selectedTime  && isShown ? (
        <div className="flex items-center justify-between mb-4 w-full mt-2">
          <h3 className="mr-4 text-right w-1/3 bold">Mobile No</h3>
          <div className="w-2/3 flex flex-wrap gap-1 justify-start">
            <input
              type="number"
              placeholder="Enter mobile number"
              value={mobileNo}
              onChange={(e) => onChangeHandlerForMobileNo(e)}
              className=" p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm"
            />
          </div>
        </div>
      ) : (
        ""
      )}
      {isShown ? (
        <div className="flex justify-center mt-4">
          <button
            type="button"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={bookCourtHandler}
          >
            Book
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default BookingDetails;
