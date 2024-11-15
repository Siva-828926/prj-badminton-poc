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

    // public AvailableSlots(Integer slotId, String slotName, Boolean isAvailable) {
    //     this.slotId = slotId;
    //     this.slotName = slotName;
    //     this.isAvailable = isAvailable;
    // }

}
