package com.badcourt.badcourt.model.response;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AvailableSlots {

    private Integer slotId;
    private String slotName;
    private Boolean isAvailable;
}
