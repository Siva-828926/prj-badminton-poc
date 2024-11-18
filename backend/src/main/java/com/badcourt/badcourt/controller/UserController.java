package com.badcourt.badcourt.controller;

import java.time.LocalDate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.badcourt.badcourt.model.request.BookCourt;
import com.badcourt.badcourt.model.response.BadCourtReponse;
import com.badcourt.badcourt.service.UserService;

import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/v1/users/")
@Slf4j
@CrossOrigin("*")
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("get/availableslots")
    public ResponseEntity<BadCourtReponse> getavailableSlotsHandler(@RequestParam("locationId") Integer locationId,
            @RequestParam("complexId") Integer complexId, @RequestParam("courtId") Integer courtId,
            @RequestParam("date") String date) {
        log.info("Get Available slots handler starts for location {}, complex {}, court{} ", locationId, complexId,
                courtId, date);
        LocalDate localDate = LocalDate.parse(date);
        return ResponseEntity.ok(userService.getAvailableSlots(locationId, complexId, courtId, localDate));

    }

    @PostMapping("court/book")
    public ResponseEntity<BadCourtReponse> bookingCourtHandler(@Valid @RequestBody BookCourt bookCourt) {
        log.info("Booking court handler starts for user {}", bookCourt.getMobileNo());
        return ResponseEntity.ok(userService.bookCourt(bookCourt));

    }

    @GetMapping("get/bookingdetails")
    public ResponseEntity<BadCourtReponse> getBookingDetails(@Valid @RequestParam("mobileNo") Long mobileNo) {
        log.info("Fetching booking detils handler startd for user {}", mobileNo);
        return ResponseEntity.ok(userService.fetchBookingDetails(mobileNo));

    }

    @DeleteMapping("delete/bookings")
    public ResponseEntity<BadCourtReponse> deleteBookings(@Valid @RequestParam("bookingId") Integer bookingId) {
        log.info("Deleting booking handler starts for booking id", bookingId);
        return ResponseEntity.ok(userService.deleteBookingDetails(bookingId));

    }

}
