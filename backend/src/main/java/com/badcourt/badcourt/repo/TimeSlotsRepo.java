package com.badcourt.badcourt.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.badcourt.badcourt.entity.TimeSlots;

@Repository
public interface TimeSlotsRepo extends JpaRepository<TimeSlots ,Integer> {

    
} 