import axios from "axios";
import { toast } from "react-toastify";
import {
  IAddNewCourt,
  IApiResponse,
  IBookingDetailsList,
  IBookingForm,
  ICancelBooking,
  IComplexesList,
  ICourtsList,
  ILocationList,
  ITimeSlotsList,
} from "../constants/Data";
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

export const addNewCourt = (formValues: FormData): Promise<IAddNewCourt> => {
  const url = BASE_URL + "admin/courts/add";
  return axios
    .post<IApiResponse>(url, formValues)
    .then((response) => {
      if (response.data.serviceStatus) {
        console.log(response.data);
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

export const fetchLocation = (mobileNo: any): Promise<ILocationList> => {
  const url = BASE_URL + "member/get/locations";
  return axios
    .get<IApiResponse>(url, {
      params: {
        mobileNo: mobileNo,
      },
    })
    .then((response) => {
      if (response.data.serviceStatus) {
        console.log(response.data);
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

export const fetchComplexes = (locationId: number): Promise<IComplexesList> => {
  const url = BASE_URL + "member/get/complexes";
  return axios
    .get<IApiResponse>(url, {
      params: {
        locationId: locationId,
      },
    })
    .then((response) => {
      if (response.data.serviceStatus) {
        console.log(response.data);
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

export const fetchCourts = (complexId: number): Promise<ICourtsList> => {
  const url = BASE_URL + "member/get/courts";
  return axios
    .get<IApiResponse>(url, {
      params: {
        complexId: complexId,
      },
    })
    .then((response) => {
      if (response.data.serviceStatus) {
        console.log(response.data);
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

export const fetchAvailableSlots = (
  locationId: number,
  complexId: number,
  courtId: number,
  date: string
): Promise<ITimeSlotsList> => {
  const url = BASE_URL + "users/get/availableslots";
  return axios
    .get<IApiResponse>(url, {
      params: {
        locationId: locationId,
        complexId: complexId,
        courtId: courtId,
        date: date,
      },
    })
    .then((response) => {
      if (response.data.serviceStatus) {
        console.log(response.data);
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

export const bookCourt = (bookcourtDetails: IBookingForm) => {
  const url = BASE_URL + "users/court/book";
  return axios
    .post(url, bookcourtDetails)
    .then((response) => {
      if (response.data.serviceStatus) {
        console.log(response.data);
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
