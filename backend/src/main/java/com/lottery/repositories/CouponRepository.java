package com.lottery.repositories;

import com.lottery.entities.Coupon;
import org.springframework.data.repository.CrudRepository;

public interface CouponRepository extends CrudRepository<Coupon, Long> {
}
