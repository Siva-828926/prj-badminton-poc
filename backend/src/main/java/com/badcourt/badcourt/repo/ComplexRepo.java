package com.badcourt.badcourt.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.badcourt.badcourt.entity.Complexs;

@Repository
public interface ComplexRepo extends JpaRepository<Complexs, Integer> {

    @Query("SELECT COUNT(c) FROM Complexs c " +
            "JOIN c.locations l " +
            "JOIN l.userLocations ul " +
            "WHERE ul.user.mobileNo = :mobileNo " +
            "AND l.locationName = :locationName")
    Long countComplexesByUserAndLocation(@Param("mobileNo") Long mobileNo, @Param("locationName") String locationName);
}
