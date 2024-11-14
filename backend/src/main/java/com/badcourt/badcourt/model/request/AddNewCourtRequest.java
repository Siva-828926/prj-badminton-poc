package com.badcourt.badcourt.model.request;

import java.util.List;


import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AddNewCourtRequest {

    @NotNull( message = "Mobile number can't be empty")
    private Long mobileNo;
    private String userName;
    @NotEmpty( message ="Location can't be empty")
    private String location;
    @NotEmpty(message ="Complex name can't be empty")
    private String complexName;
    @NotEmpty(message ="Court name can't be empty")
    private List<String> courtName;

}
