package com.badcourt.badcourt.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class BookingDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bookingId;
    private Long userMobileNo;
    @ManyToOne
    @JoinColumn(name = "location_id")
    private Locations locationId;
    @ManyToOne
    @JoinColumn(name = "complex_id")
    private Complexs complexsId;
    @ManyToOne
    @JoinColumn(name = "court_id")
    private Courts courtsId;
    private LocalDate date;
    @ManyToOne
    @JoinColumn(name = "time_slot_id")
    private TimeSlots timeSlots;
    @ManyToOne
    @JoinColumn(name = "mobile_no")
    private User userId;
}
