package com.badcourt.badcourt.entity;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Locations {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Integer locationId;
    @Column(unique = true)
    private String locationName;
    @OneToMany(mappedBy = "locations", cascade = CascadeType.ALL, orphanRemoval = true , fetch = FetchType.LAZY)
    private List<Complexs> complexes;
    @OneToMany(mappedBy = "locations", cascade = CascadeType.ALL, orphanRemoval = true , fetch =  FetchType.LAZY)
    private List<UserLocation> userLocations;


}
