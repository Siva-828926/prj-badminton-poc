package com.badcourt.badcourt.entity;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class User {

    @Id
    private Long mobileNo;
    private String name;
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UserLocation>userLocations;

    public void addUserLocation(UserLocation userLocation) {
        this.userLocations.add(userLocation);
        userLocation.setUser(this);
    }
}
