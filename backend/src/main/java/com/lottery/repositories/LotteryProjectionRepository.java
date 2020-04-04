package com.lottery.repositories;

import com.lottery.projections.LotteryProjection;

public interface LotteryProjectionRepository {
    LotteryProjection getCurrentLotteries();
}
