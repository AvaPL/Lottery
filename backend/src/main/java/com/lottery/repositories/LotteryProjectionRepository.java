package com.lottery.repositories;

import com.lottery.projections.LotteryProjection;

import java.util.List;

public interface LotteryProjectionRepository {
    List<LotteryProjection> getCurrentLotteries();
}
