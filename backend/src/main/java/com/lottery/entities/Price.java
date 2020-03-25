package com.lottery.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Price {
    @Id
    @GeneratedValue
    private Long id;
    private int hitsCount;
    private float price;
    @ManyToOne
    @JoinColumn(name = "lottery_draw_id")
    private LotteryDraw lotteryDraw;
}
