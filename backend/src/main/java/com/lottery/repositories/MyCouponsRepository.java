package com.lottery.repositories;

import com.lottery.projections.MyCoupons;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "myCoupons", path = "myCoupons")
public interface MyCouponsRepository extends CrudRepository<MyCoupons, String> {
}
