package com.badcourt.badcourt.model.response;

import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.List;

import com.badcourt.badcourt.model.projection.BookingDetailsProjection;

import lombok.AllArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AllBookingDetailsResponse implements ApiResponse{

    private List<BookingDetailsProjection> bookingDetailsList;
    
}
