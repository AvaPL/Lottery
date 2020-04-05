package com.lottery.repositories;

import com.lottery.projections.CurrentLotterySummary;
import org.springframework.data.repository.CrudRepository;

public interface CurrentLotterySummaryRepository extends CrudRepository<CurrentLotterySummary, Long> {
}

