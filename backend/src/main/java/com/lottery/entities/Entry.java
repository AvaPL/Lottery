package com.lottery.entities;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class Entry {
    @Id
    @SequenceGenerator(name = "ENTRY_GENERATOR", sequenceName = "ENTRY_SEQUENCE", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ENTRY_GENERATOR")
    private Long id;
    @NotNull
    private Long numbers;
    private Float priceWon;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "coupon_id")
    private Coupon coupon;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "lottery_draw_id")
    private LotteryDraw lotteryDraw;
}
