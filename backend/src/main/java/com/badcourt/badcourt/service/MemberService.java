package com.badcourt.badcourt.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.badcourt.badcourt.adapter.ResponeBuilder;
import com.badcourt.badcourt.constants.BadcourtConstants;
import com.badcourt.badcourt.model.projection.ComplexProjection;
import com.badcourt.badcourt.model.projection.CourtProjection;
import com.badcourt.badcourt.model.projection.LocationProjection;
import com.badcourt.badcourt.model.response.BadCourtReponse;
import com.badcourt.badcourt.model.response.ComplexesList;
import com.badcourt.badcourt.model.response.CourtsList;
import com.badcourt.badcourt.model.response.LocationsList;
import com.badcourt.badcourt.repo.ComplexRepo;
import com.badcourt.badcourt.repo.CourtRepo;
import com.badcourt.badcourt.repo.LocationRepo;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class MemberService {

    private LocationRepo locationRepo;
    private ComplexRepo complexRepo;
    private CourtRepo courtRepo;
    private ResponeBuilder responeBuilder;

    public MemberService(LocationRepo locationRepo, ComplexRepo complexRepo, CourtRepo courtRepo,
            ResponeBuilder responeBuilder) {
        this.locationRepo = locationRepo;
        this.complexRepo = complexRepo;
        this.courtRepo = courtRepo;
        this.responeBuilder = responeBuilder;
    }

    public BadCourtReponse getLocationDetails(Long mobileNo) {
        log.info("Get location details service starts");
        List<LocationProjection> listOfLocations;
        if (mobileNo == null) {
            listOfLocations = locationRepo.findAllProjectedBy();
        } else {
            listOfLocations = locationRepo.findAllByMobileNo(mobileNo);
        }

        if (listOfLocations.isEmpty()) {
            log.error("No Location found");
            return responeBuilder.buildFailureResponse(BadcourtConstants.NO_LOCATION_FOUND);
        }
        return responeBuilder.buildSuccessResponse(LocationsList.builder().locationList(listOfLocations).build());
    }

    public BadCourtReponse getComplexesBasedOnLocation(Integer locationId) {
        log.info("Get complex details service starts for location {}", locationId);
        List<ComplexProjection> complexsList = complexRepo.findComplexesByLocationId(locationId);
        if (complexsList.isEmpty()) {
            log.error("No Complexs found for given location {}", locationId);
            return responeBuilder.buildFailureResponse(BadcourtConstants.NO_COMPLEX_FOUND);
        }
        return responeBuilder.buildSuccessResponse(ComplexesList.builder().complexList(complexsList).build());
    }

    public BadCourtReponse getCourtsBasedOnComplexAndLocation(Integer complexId) {

        log.info("Get Court details service starts for Complex {}", complexId);
        List<CourtProjection> courtList = courtRepo.getCourtsByComplexId(complexId);
        if (courtList.isEmpty()) {
            log.error("No Court found for given complex {}", complexId);
            return responeBuilder.buildFailureResponse(BadcourtConstants.No_COURT_FOUND);
        }
        return responeBuilder.buildSuccessResponse(CourtsList.builder().courtList(courtList).build());

    }

}
