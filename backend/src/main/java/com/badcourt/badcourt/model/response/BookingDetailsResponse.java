package com.badcourt.badcourt.model.response;

import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookingDetailsResponse implements ApiResponse {
    private String bookingId;

}
