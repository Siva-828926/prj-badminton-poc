package com.badcourt.badcourt.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.badcourt.badcourt.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    @Query("SELECT u FROM User u " +
           "JOIN u.userLocations ul " +
           "JOIN ul.locations l " +
           "JOIN Complexs c ON l.locationId = c.locations.locationId " +
           "WHERE l.locationId = :locationId AND c.complexId = :complexId")
    User findUserByLocationAndComplex(@Param("locationId") Integer locationId, @Param("complexId") Integer complexId);
}
