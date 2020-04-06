package com.lottery.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Entry {
    @Id
    @GeneratedValue
    private Long id;
    private int numbers;
    private int hitsCount;
    @ManyToOne //TODO: Might be not optimal (eager fetch).
    @JoinColumn(name = "coupon_id")
    private Coupon coupon;
    @ManyToOne //TODO: Might be not optimal (eager fetch).
    @JoinColumn(name = "lottery_draw_id")
    private LotteryDraw lotteryDraw;
}
