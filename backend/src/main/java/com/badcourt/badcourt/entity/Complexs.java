package com.badcourt.badcourt.entity;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
public class Complexs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String complexName;
    private String complexImages;
    @ManyToOne
    @JoinColumn(name = "location_id")
    private Locations locations;
    @OneToMany(mappedBy = "complexs", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Courts> courts;

}
