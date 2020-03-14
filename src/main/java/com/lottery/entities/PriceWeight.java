package com.lottery.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class PriceWeight {
    @Id
    @GeneratedValue
    private Long id;
    private int hitsCount;
    private int weight;
    @ManyToOne
    @JoinColumn(name = "draw_type_id")
    private DrawType drawType;
}
