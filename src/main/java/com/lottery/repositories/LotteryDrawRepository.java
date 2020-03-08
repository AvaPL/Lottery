package com.lottery.repositories;

import com.lottery.entities.LotteryDraw;
import org.springframework.data.repository.CrudRepository;

public interface LotteryDrawRepository extends CrudRepository<LotteryDraw, Long> {
}
