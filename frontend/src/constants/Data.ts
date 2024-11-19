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

export interface IAddNewCourt {
  msg: string;
}

export interface ILocationList {
  locationList: ILocation[];
}

export interface ILocation {
  locationId: number;
  locationName: string;
}

export interface IComplexesList {
  complexList: IComplexes[];
}

export interface IComplexes {
  id: number;
  complexName: string;
  complexImages: string;
}

export interface ICourtsList {
  courtList: ICourts[];
}

export interface ICourts {
  courtId: number;
  courtName: string;
}

export interface ITimeSlots {
  slotId: number;
  slotName: string;
  isAvailable: boolean;
}

export interface ITimeSlotsList {
  availableslots: ITimeSlots[];
}

export interface IBookingForm {
  mobileNo: number;
  locationId: number;
  complexId: number;
  courtId: number;
  date: string;
  timeSlot: number;
}
