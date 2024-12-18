package com.badcourt.badcourt.model.response;


import java.util.List;
import com.badcourt.badcourt.model.projection.LocationProjection;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LocationsList implements ApiResponse{

   private List<LocationProjection> locationList;
    
}
