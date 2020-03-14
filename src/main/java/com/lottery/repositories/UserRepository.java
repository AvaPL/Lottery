package com.lottery.repositories;

import com.lottery.entities.Account;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<Account, Long> {
}
