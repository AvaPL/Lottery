package com.lottery.repositories;

import com.lottery.entities.Entry;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EntryRepository extends CrudRepository<Entry, Long> {
    List<Entry> findAllByLotteryDraw_Id(Long lotteryDraw_id);
}
