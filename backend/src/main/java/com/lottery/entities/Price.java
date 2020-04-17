package com.lottery.entities;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class Price {
    @Id
    @SequenceGenerator(name = "PRICE_GENERATOR", sequenceName = "PRICE_SEQUENCE", allocationSize = 1, initialValue = 1000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PRICE_GENERATOR")
    private Long id;
    @NotNull
    private Integer hitsCount;
    private Float price;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "lottery_draw_id")
    private LotteryDraw lotteryDraw;
}
