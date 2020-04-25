package com.lottery.entities;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
@NoArgsConstructor(access = AccessLevel.PRIVATE, force = true)
@RequiredArgsConstructor
public class Entry {
    @Id
    @SequenceGenerator(name = "ENTRY_GENERATOR", sequenceName = "ENTRY_SEQUENCE", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ENTRY_GENERATOR")
    private Long id;
    @NotNull
    private final Long numbers;
    private Float priceWon;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "coupon_id")
    private final Coupon coupon;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "lottery_draw_id")
    private final LotteryDraw lotteryDraw;
}
