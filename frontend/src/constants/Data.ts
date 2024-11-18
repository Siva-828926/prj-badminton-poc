export interface IApiResponse {
  serviceStatus: boolean;
  serviceMsg: null;
  data: Object;
}

export interface IBookingDetailsList {
  bookingDetailsList: IBookingDetails[];
}

export interface IBookingDetails {
  date: string;
  timeSlot: string;
  locationName: string;
  bookingId: number;
  courtName: string;
  complexName: string;
  isPast: boolean;
}

export interface ICancelBooking {
  msg: string;
}