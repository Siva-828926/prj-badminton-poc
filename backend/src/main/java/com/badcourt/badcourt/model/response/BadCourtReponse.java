package com.badcourt.badcourt.model.response;

import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BadCourtReponse {  
    private Boolean serviceStatus;
    private String serviceMsg;
    private ApiResponse data;  
}
