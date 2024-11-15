package com.badcourt.badcourt.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.badcourt.badcourt.entity.Courts;
import com.badcourt.badcourt.model.projection.CourtProjection;

@Repository
public interface CourtRepo extends JpaRepository<Courts, Integer> {

    @Query(" SELECT c.courtId AS courtId , c.courtName AS courtName "
            + "FROM Courts c WHERE c.complexs.id =  :complexId")
    List<CourtProjection> getCourtsByComplexId(Integer complexId);
}