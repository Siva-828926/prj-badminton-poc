package com.badcourt.badcourt.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Courts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer courtId;
    private String courtName;
    @ManyToOne
    @JoinColumn(name = "complex_id")
    private Complexs complexs;

}
