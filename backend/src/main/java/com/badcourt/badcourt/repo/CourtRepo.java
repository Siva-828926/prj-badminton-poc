package com.badcourt.badcourt.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.badcourt.badcourt.entity.Courts;

@Repository
public interface CourtRepo extends JpaRepository<Courts , Integer>{

    
}