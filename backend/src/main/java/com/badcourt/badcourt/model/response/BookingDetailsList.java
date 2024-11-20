package com.badcourt.badcourt.model.response;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookingDetailsList {

    private Integer bookingId;
    private String locationName;
    private String complexName;
    private String courtName;
    private LocalDate date;
    private String timeSlot;
    private Boolean isPast;

}
