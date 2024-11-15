package com.badcourt.badcourt.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.badcourt.badcourt.entity.Locations;
import com.badcourt.badcourt.model.projection.LocationProjection;

@Repository
public interface LocationRepo extends JpaRepository<Locations, Integer> {

    Locations findByLocationName(String location);

    List<LocationProjection> findAllProjectedBy();

    @Query("SELECT DISTINCT l.locationId AS locationId, l.locationName AS locationName " +
            "FROM Locations l JOIN l.userLocations ul JOIN ul.user u " +
            "WHERE u.mobileNo = :mobileNo")
    List<LocationProjection> findAllByMobileNo(@Param("mobileNo") Long mobileNo);
}