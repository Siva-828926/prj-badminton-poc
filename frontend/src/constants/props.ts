import { DateFormat } from "../util/DateService";
import { IBookingDetails, IComplexes, ICourts, ITimeSlots } from "./Data";

export interface CaBookingDetailsProps {
  details: IBookingDetails;
  cancelHandler: (bookingId: number) => void;
}

export interface SubHeaderProps {
  heading: string;
}

export interface ComplexProps {
  details: IComplexes;
  isSelected : boolean;
  onClickHandler: (complexId: number) => void;

}

export interface CourtProps {
  details: ICourts;
  isSelected : boolean;
  onClickHandler: (courtId: number) => void;
}

export interface DateProps {
    details: DateFormat;
    isSelected : boolean;
    onClickHandler: (selectedDate: string) => void;
  }


  export interface TimeSlotsProps {
    details: ITimeSlots;
    isSelected : boolean;
    onClickHandler: (selectedTime: number) => void;
  }