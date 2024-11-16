package com.badcourt.badcourt.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.badcourt.badcourt.adapter.ResponeBuilder;
import com.badcourt.badcourt.constants.BadcourtConstants;
import com.badcourt.badcourt.entity.Complexs;
import com.badcourt.badcourt.entity.Courts;
import com.badcourt.badcourt.entity.Locations;
import com.badcourt.badcourt.entity.User;
import com.badcourt.badcourt.entity.UserLocation;
import com.badcourt.badcourt.model.request.AddNewCourtRequest;
import com.badcourt.badcourt.model.request.BookingDetails;
import com.badcourt.badcourt.model.response.AddNewCourtResponse;
import com.badcourt.badcourt.model.response.AvailableSlots;
import com.badcourt.badcourt.model.response.AvailableSlotsResponse;
import com.badcourt.badcourt.model.response.BadCourtReponse;
import com.badcourt.badcourt.repo.BookingDetailsRepo;
import com.badcourt.badcourt.repo.ComplexRepo;
import com.badcourt.badcourt.repo.CourtRepo;
import com.badcourt.badcourt.repo.LocationRepo;
import com.badcourt.badcourt.repo.UserLocationRepo;
import com.badcourt.badcourt.repo.UserRepo;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class AdminService {

    private final ResponeBuilder responeBuilder;
    private final UserRepo userRepo;
    private final LocationRepo locationRepo;
    private final CourtRepo courtRepo;
    private final ComplexRepo complexRepo;
    private final UserLocationRepo userLocationRepo;
    private final BookingDetailsRepo bookingDetailsRepo;

    private final String filePath = "C:/Users/vsiva6/Desktop/CanadaPost/Badmintion-Assigntment-requirements/Data/";

    @Autowired
    public AdminService(ResponeBuilder responeBuilder, UserRepo userRepo, LocationRepo locationRepo,
            CourtRepo courtRepo, UserLocationRepo userLocationRepo,
            ComplexRepo complexRepo, BookingDetailsRepo bookingDetailsRepo) {
        this.responeBuilder = responeBuilder;
        this.userRepo = userRepo;
        this.locationRepo = locationRepo;
        this.courtRepo = courtRepo;
        this.complexRepo = complexRepo;
        this.userLocationRepo = userLocationRepo;
        this.bookingDetailsRepo = bookingDetailsRepo;
    }

    public BadCourtReponse addNewCourt(AddNewCourtRequest addNewCourtRequest, MultipartFile courtImg) {
        log.info("Add new court services starts {}", addNewCourtRequest.getMobileNo());
        if (addNewCourtRequest.getCourtName().size() > 3) {
            return responeBuilder.buildFailureResponse(BadcourtConstants.TOO_MANY_COURTS_FOR_SINGLE_LOCATION);
        }
        Optional<User> userDetails = userRepo.findById(addNewCourtRequest.getMobileNo());
        if (userDetails.isEmpty()) {
            User user = User.builder().mobileNo(addNewCourtRequest.getMobileNo()).name(addNewCourtRequest.getUserName())
                    .userLocations(new ArrayList<>()).build();
            if (addNewCourtInDB(user, addNewCourtRequest, courtImg)) {
                return responeBuilder.buildSuccessResponse(AddNewCourtResponse.builder()
                        .msg(BadcourtConstants.NEW_COURT_ADDED_SUCCESSFULLY + "" + addNewCourtRequest.getMobileNo())
                        .build());
            }
            return null;
        } else if (checkNoOfLocationAndComplexMappedToUser(userDetails.get(), addNewCourtRequest.getLocation())) {
            if (addNewCourtInDB(userDetails.get(), addNewCourtRequest, courtImg)) {
                return responeBuilder.buildSuccessResponse(AddNewCourtResponse.builder()
                        .msg(BadcourtConstants.NEW_COURT_ADDED_SUCCESSFULLY + "" + addNewCourtRequest.getMobileNo())
                        .build());
            }
            return null;
        } else {
            return responeBuilder.buildFailureResponse(BadcourtConstants.MAXIMUM_LOCATIONS_ALLOCATED_TO_USER);
        }
    }

    private Boolean checkNoOfLocationAndComplexMappedToUser(User userDetails, String newAddedLocations) {

        Long complexCount = complexRepo.countComplexesByUserAndLocation(userDetails.getMobileNo(), newAddedLocations);
        return userDetails.getUserLocations().size() <= 3 && complexCount <= 4;
    }

    @Transactional
    private Boolean addNewCourtInDB(User user, AddNewCourtRequest addNewCourtRequest, MultipartFile courtImage) {
        log.info("DB insertion starts");
        user = userRepo.save(user);

        Locations locations = locationRepo.findByLocationName(addNewCourtRequest.getLocation());
        if (locations == null) {
            locations = Locations.builder()
                    .locationName(addNewCourtRequest.getLocation())
                    .build();
            locations = locationRepo.save(locations);
        }

        Complexs complexs = Complexs.builder()
                .complexName(addNewCourtRequest.getComplexName())
                .locations(locations)
                .build();
        complexs = complexRepo.save(complexs);
        String imagePath = saveFileInServer(user.getMobileNo(), locations.getLocationId(), complexs.getComplexId(),
                courtImage);
        complexs.setComplexImages(imagePath);
        complexs = complexRepo.save(complexs);

        UserLocation userLocation = new UserLocation();
        userLocation.setUser(user);
        userLocation.setLocations(locations);
        user.addUserLocation(userLocation);
        userLocationRepo.save(userLocation);
        user = userRepo.save(user);

        for (String court : addNewCourtRequest.getCourtName()) {

            Courts courts = Courts.builder()
                    .courtName(court)
                    .complexs(complexs)
                    .build();
            courts = courtRepo.save(courts);
        }
        log.info("DB insertion done");
        return true;
    }

    private String saveFileInServer(Long userId, Integer locationId, Integer complexId, MultipartFile courtImage) {

        String userDir = filePath + userId + "/";
        String locDir = userDir + locationId + "/" + complexId;
        File dir = new File(locDir);
        if (!dir.exists()) {
            dir.mkdirs();
        }
        String imagePath = locDir + "/" + courtImage.getOriginalFilename();
        Path path = Paths.get(imagePath);
        try {
            Files.write(path, courtImage.getBytes());
            return imagePath;
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }
    }

    public BadCourtReponse fetchBookingDetails(BookingDetails bookingDetails) {
        log.info("Booking details service starts for admin {}", bookingDetails.getMobileNo());

        List<AvailableSlots> availableSlots = bookingDetailsRepo.findBookingDetails(bookingDetails.getLocationId(),
                bookingDetails.getComplexId(), bookingDetails.getCourtId(), LocalDate.parse(bookingDetails.getDate()),
                bookingDetails.getMobileNo());
        return responeBuilder
                .buildSuccessResponse(AvailableSlotsResponse.builder().availableslots(availableSlots).build());
    }

}
