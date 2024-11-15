package com.badcourt.badcourt.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.badcourt.badcourt.entity.Locations;
import com.badcourt.badcourt.model.projection.LocationProjection;

@Repository
public interface LocationRepo extends JpaRepository<Locations, Integer> {

    Locations findByLocationName(String location);
    List<LocationProjection> findAllProjectedBy();
} 