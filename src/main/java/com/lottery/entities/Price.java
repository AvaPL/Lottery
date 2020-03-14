package com.lottery.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class Price {
    @Id
    @GeneratedValue
    private Long id;
    private LotteryDraw lotteryDraw;
    private int hitsCount;
    private float price;
}
