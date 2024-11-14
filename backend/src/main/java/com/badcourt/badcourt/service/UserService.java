package com.badcourt.badcourt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.badcourt.badcourt.adapter.ResponeBuilder;
import com.badcourt.badcourt.constants.BadcourtConstants;
import com.badcourt.badcourt.entity.Locations;
import com.badcourt.badcourt.model.response.BadCourtReponse;
import com.badcourt.badcourt.model.response.LocationsList;
import com.badcourt.badcourt.repo.LocationRepo;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class UserService {

    private final ResponeBuilder responeBuilder;
    private final LocationRepo locationRepo;

    @Autowired
    public UserService(ResponeBuilder responeBuilder, LocationRepo locationRepo) {
        this.responeBuilder = responeBuilder;
        this.locationRepo = locationRepo;
    }

    public BadCourtReponse getLocationDetails() {
        List<Locations> listOfLocations = locationRepo.findAll();
        if (listOfLocations.isEmpty()) {
            return responeBuilder.buildFailureResponse(BadcourtConstants.NO_LOCATION_FOUND);
        }
        return responeBuilder.buildSuccessResponse(LocationsList.builder().locationList(listOfLocations).build());
    }

    public BadCourtReponse getDetailsOfCourtBasedOnLocation() {

    }

    public BadCourtReponse bookCourt() {

    }

}
