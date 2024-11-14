package com.badcourt.badcourt.adapter;
import org.springframework.stereotype.Component;
import com.badcourt.badcourt.model.response.ApiResponse;
import com.badcourt.badcourt.model.response.BadCourtReponse;

@Component
public class ResponeBuilder {

    public BadCourtReponse buildSuccessResponse(ApiResponse apiResponse) {
        return BadCourtReponse.builder().serviceStatus(Boolean.TRUE).data(apiResponse).build();
    }

    public BadCourtReponse buildFailureResponse(String msg) {
            return BadCourtReponse.builder().serviceStatus(Boolean.FALSE).serviceMsg(msg).build();
    }
}
