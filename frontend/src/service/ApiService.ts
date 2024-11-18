import axios from "axios";
import { toast } from "react-toastify";
import { IApiResponse, IBookingDetailsList, ICancelBooking } from "../constants/Data";

const BASE_URL = "http://localhost:8080/badcourt/api/v1/";

export const getBookingDetails = (
  mobileNo: number
): Promise<IBookingDetailsList> => {
  const url = BASE_URL + "users/get/bookingdetails";
  return axios
    .get<IApiResponse>(url, {
      params: {
        mobileNo: mobileNo,
      },
    })
    .then((response) => {
      if (response.data.serviceStatus) {
        return response.data.data;
      } else {
        toast.error(response.data.serviceMsg);
      }
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const cancelBooking = (bookingId: number): Promise<ICancelBooking> => {
  const url = BASE_URL + "users/delete/bookings";

  return axios
    .delete<IApiResponse>(url, {
      params: {
        bookingId: bookingId,
      },
    })
    .then((response) => {
      if (response.data.serviceStatus) {
        return response.data.data;
      } else {
        toast.error(response.data.serviceMsg);
      }
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
