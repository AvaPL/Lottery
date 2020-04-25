package com.lottery.repositories;

import com.lottery.entities.DrawType;
import org.springframework.data.repository.CrudRepository;

import javax.validation.constraints.NotNull;

public interface DrawTypeRepository extends CrudRepository<DrawType, Long> {

    DrawType findByName(@NotNull String name);

}
