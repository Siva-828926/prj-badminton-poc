package com.badcourt.badcourt.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.badcourt.badcourt.adapter.ResponeBuilder;
import com.badcourt.badcourt.constants.BadcourtConstants;
import com.badcourt.badcourt.entity.BookingDetails;
import com.badcourt.badcourt.entity.Complexs;
import com.badcourt.badcourt.entity.Courts;
import com.badcourt.badcourt.entity.Locations;
import com.badcourt.badcourt.entity.TimeSlots;
import com.badcourt.badcourt.model.projection.BookingDetailsProjection;
import com.badcourt.badcourt.model.request.BookCourt;
import com.badcourt.badcourt.model.response.AllBookingDetailsResponse;
import com.badcourt.badcourt.model.response.AvailableSlots;
import com.badcourt.badcourt.model.response.AvailableSlotsResponse;
import com.badcourt.badcourt.model.response.BadCourtReponse;
import com.badcourt.badcourt.model.response.BookingDetailsResponse;
import com.badcourt.badcourt.repo.BookingDetailsRepo;
import com.badcourt.badcourt.repo.ComplexRepo;
import com.badcourt.badcourt.repo.CourtRepo;
import com.badcourt.badcourt.repo.LocationRepo;
import com.badcourt.badcourt.repo.TimeSlotsRepo;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class UserService {

    private final ResponeBuilder responeBuilder;
    private final LocationRepo locationRepo;
    private final ComplexRepo complexRepo;
    private final CourtRepo courtRepo;
    private final BookingDetailsRepo bookingDetailsRepo;
    private final TimeSlotsRepo timeSlotsRepo;

    @Autowired
    public UserService(ResponeBuilder responeBuilder, LocationRepo locationRepo, ComplexRepo complexRepo,
            CourtRepo courtRepo, BookingDetailsRepo bookingDetailsRepo, TimeSlotsRepo timeSlotsRepo) {
        this.responeBuilder = responeBuilder;
        this.locationRepo = locationRepo;
        this.complexRepo = complexRepo;
        this.courtRepo = courtRepo;
        this.bookingDetailsRepo = bookingDetailsRepo;
        this.timeSlotsRepo = timeSlotsRepo;
    }


    public BadCourtReponse getAvailableSlots(Integer locationId, Integer complexId, Integer courtId, LocalDate date) {
        log.info("Get Available slots details service starts for location {} , complex {} , court{} , date {}",
                locationId, complexId, courtId, date);
        List<AvailableSlots> availableSlots = bookingDetailsRepo.findSlotsWithAvailability(locationId, complexId,
                courtId, date);
        if (availableSlots.isEmpty()) {
            log.info("No slots available for selected combination");
        }
        return responeBuilder
                .buildSuccessResponse(AvailableSlotsResponse.builder().availableslots(availableSlots).build());
    }

    @Transactional
    public BadCourtReponse bookCourt(BookCourt bookCourt) {
        log.info("Book court service starts for user {} ", bookCourt.getMobileNo());
        Locations location = locationRepo.findById(bookCourt.getLocationId())
                .orElseThrow(() -> new RuntimeException("Location not found"));
        Complexs complex = complexRepo.findById(bookCourt.getComplexId())
                .orElseThrow(() -> new RuntimeException("Complex not found"));
        Courts court = courtRepo.findById(bookCourt.getCourtId())
                .orElseThrow(() -> new RuntimeException("Court not found"));
        TimeSlots timeSlot = timeSlotsRepo.findById(bookCourt.getTimeSlot())
                .orElseThrow(() -> new RuntimeException("Time slot not found"));

        BookingDetails bookingDetails = BookingDetails.builder().userMobileNo(bookCourt.getMobileNo())
                .locationId(location).complexsId(complex).courtsId(court).date(LocalDate.parse(bookCourt.getDate()))
                .timeSlots(timeSlot).build();
        bookingDetails = bookingDetailsRepo.save(bookingDetails);
        return responeBuilder.buildSuccessResponse(BookingDetailsResponse.builder()
                .bookingId(BadcourtConstants.COURT_BOOKED_SUCCESSFULLY + " - " + bookingDetails.getBookingId())
                .build());
    }

    public BadCourtReponse fetchBookingDetails(Long mobileNo) {
        List<BookingDetailsProjection> bookingDetails = bookingDetailsRepo.findAllByUserMobileNo(mobileNo);
        if (bookingDetails.isEmpty()) {
            log.error("No Booking details found for user}", mobileNo);
            return responeBuilder.buildFailureResponse(BadcourtConstants.NO_BOOKING_DETAILS_FOUND);
        }

        return responeBuilder
                .buildSuccessResponse(AllBookingDetailsResponse.builder().bookingDetailsList(bookingDetails).build());

    }

}
