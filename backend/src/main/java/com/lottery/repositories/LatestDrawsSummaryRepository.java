package com.lottery.repositories;

import com.lottery.projections.LatestDrawsSummary;
import org.springframework.data.repository.CrudRepository;

public interface LatestDrawsSummaryRepository extends CrudRepository<LatestDrawsSummary, Long> {
}
