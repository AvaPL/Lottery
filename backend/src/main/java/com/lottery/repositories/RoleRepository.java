package com.lottery.repositories;

import com.lottery.entities.Role;
import org.springframework.data.repository.CrudRepository;

import javax.validation.constraints.NotNull;

public interface RoleRepository extends CrudRepository<Role, Long> {
    Role findByName(@NotNull String name);
}
