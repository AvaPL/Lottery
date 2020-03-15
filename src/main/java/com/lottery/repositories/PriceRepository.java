package com.lottery.repositories;

import com.lottery.entities.Price;
import org.springframework.data.repository.CrudRepository;

public interface PriceRepository extends CrudRepository<Price, Long> {
}
