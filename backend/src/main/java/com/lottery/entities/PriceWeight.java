package com.lottery.entities;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class PriceWeight {
    @Id
    @SequenceGenerator(name = "PRICE_WEIGHT_GENERATOR", sequenceName = "PRICE_WEIGHT_SEQUENCE", allocationSize = 1, initialValue = 1000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PRICE_WEIGHT_GENERATOR")
    private Long id;
    @NotNull
    private Integer hitsCount;
    @NotNull
    private Integer weight;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "draw_type_id")
    private DrawType drawType;
}
