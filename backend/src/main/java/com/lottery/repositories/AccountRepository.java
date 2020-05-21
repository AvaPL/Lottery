package com.lottery.repositories;

import com.lottery.entities.Account;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AccountRepository extends CrudRepository<Account, Long> {
    Account findAccountByUsername(String username);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);
}
