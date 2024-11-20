package com.badcourt.badcourt.model.projection;

import java.time.LocalDate;

public interface BookingDetailsProjection {

    Integer getBookingId();

    Locations getLocationId();

    Complexs getcomplexsId();

    Courts getcourtsId();

    LocalDate getDate();

    TimeSlots getTimeSlots();

    interface Locations {
        String getLocationName();

    }

    interface Complexs {
        String getComplexName();

    }

    interface Courts {
        String getcourtName();

    }

    interface TimeSlots {
        String getSlotTime();

    }

}
