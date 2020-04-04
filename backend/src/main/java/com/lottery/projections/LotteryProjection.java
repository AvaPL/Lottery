package com.lottery.projections;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class LotteryProjection {
    private final String type;
    private final Timestamp nextDraw;
    private final float price;
}
