import axios from "axios";
import { toast } from "react-toastify";


interface IApiResponse {
  serviceStatus: boolean;
  serviceMsg: null;
  data: Object;
}

const BASE_URL = "http://localhost:8080/badcourt/api/v1/";

export const getBookingDetails = (mobileNo: number): IBookingDetails[] => {
  const url = BASE_URL + "users/get/bookingdetails";
  axios
    .get<IApiResponse>(url, {
      params: {
        mobileNo: mobileNo,
      },
    })
    .then((response) => {
      if (response.data.serviceStatus) {
      } else {
        toast.error(response.data.serviceMsg);
      }
    });
};
