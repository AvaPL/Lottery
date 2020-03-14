package com.lottery.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class PriceWeight {
    @Id
    @GeneratedValue
    private Long id;
    private DrawType drawType;
    private int hitsCount;
    private int weight;
}
