import { IBookingDetails } from "./Data";

export interface CaBookingDetailsProps {
    details: IBookingDetails;
    cancelHandler: (bookingId: number) => void;
  }

  export interface SubHeaderProps{
    heading : string
  }