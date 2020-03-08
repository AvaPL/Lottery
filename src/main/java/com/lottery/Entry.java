package com.lottery;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Entry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private int numbers;
    @ManyToOne //TODO: Might be not optimal (eager fetch).
    @JoinColumn(name = "coupon_id")
    private Coupon coupon;
    @ManyToOne //TODO: Might be not optimal (eager fetch).
    @JoinColumn(name = "lottery_draw_id")
    private LotteryDraw lotteryDraw;
}
