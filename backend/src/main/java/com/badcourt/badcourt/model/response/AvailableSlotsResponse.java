package com.badcourt.badcourt.model.response;

import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.List;

import lombok.AllArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AvailableSlotsResponse implements ApiResponse {

    private List<AvailableSlots> availableslots;
}
