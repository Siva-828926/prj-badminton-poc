package com.badcourt.badcourt.model.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookingDetails {
    private Long mobileNo;
    private Integer locationId;
    private Integer complexId;
    private Integer courtId;
    private String date;

}
