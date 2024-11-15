package com.badcourt.badcourt.repo;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.badcourt.badcourt.entity.BookingDetails;
import com.badcourt.badcourt.model.projection.BookingDetailsProjection;
import com.badcourt.badcourt.model.response.AvailableSlots;

@Repository
public interface BookingDetailsRepo extends JpaRepository<BookingDetails, Integer> {

    @Query("SELECT new com.badcourt.badcourt.model.response.AvailableSlots(ts.slotId, ts.slotTime, " +
            "CASE WHEN bd.bookingId IS NULL THEN TRUE ELSE FALSE END) " +
            "FROM TimeSlots ts " +
            "LEFT JOIN BookingDetails bd " +
            "ON ts.slotId = bd.timeSlots.slotId " +
            "AND bd.locationId.locationId = :locationId " +
            "AND bd.complexsId.complexId = :complexId " +
            "AND bd.courtsId.courtId = :courtId " +
            "AND bd.date = :date")
    List<AvailableSlots> findSlotsWithAvailability(@Param("locationId") Integer locationId,
            @Param("complexId") Integer complexId,
            @Param("courtId") Integer courtId,
            @Param("date") LocalDate date);

    List<BookingDetailsProjection> findAllByUserMobileNo(@Param("userMobileNo") Long mobileNo);

    @Query("SELECT new com.badcourt.badcourt.model.response.AvailableSlots(ts.slotId, ts.slotTime, " +
            "CASE WHEN bd.bookingId IS NULL THEN TRUE ELSE FALSE END) " +
            "FROM TimeSlots ts " +
            "LEFT JOIN BookingDetails bd " +
            "ON ts.slotId = bd.timeSlots.slotId " +
            "AND bd.locationId.locationId = :locationId " +
            "AND bd.complexsId.complexId = :complexId " +
            "AND bd.courtsId.courtId = :courtId " +
            "AND bd.userId.mobileNo = :mobileNo " +
            "AND bd.date = :date")
    List<AvailableSlots> findBookingDetails(@Param("locationId") Integer locationId,
            @Param("complexId") Integer complexId,
            @Param("courtId") Integer courtId,
            @Param("date") LocalDate date,
            @Param("mobileNo") Long mobileNo);

}
