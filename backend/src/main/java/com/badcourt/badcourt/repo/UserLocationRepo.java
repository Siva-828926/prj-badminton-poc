package com.badcourt.badcourt.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.badcourt.badcourt.entity.UserLocation;

@Repository
public interface UserLocationRepo extends JpaRepository<UserLocation , Integer> {
    
}
