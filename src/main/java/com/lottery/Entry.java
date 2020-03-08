package com.lottery;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Entry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    private Coupon coupon;
    @OneToOne
    private LotteryDraw lotteryDraw;
    private int numbers;
}
