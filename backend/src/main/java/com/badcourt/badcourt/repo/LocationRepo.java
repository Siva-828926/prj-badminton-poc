package com.badcourt.badcourt.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.badcourt.badcourt.entity.Locations;

@Repository
public interface LocationRepo extends JpaRepository<Locations, Integer> {

    Locations findByLocationName(String location);

}