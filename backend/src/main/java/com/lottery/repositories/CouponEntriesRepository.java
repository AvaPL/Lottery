package com.lottery.repositories;

import com.lottery.projections.CouponEntries;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "couponEntries", path = "couponEntries")
public interface CouponEntriesRepository extends CrudRepository<CouponEntries, Long> {
}
