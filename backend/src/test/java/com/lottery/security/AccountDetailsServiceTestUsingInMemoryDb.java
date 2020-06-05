package com.lottery.security;

import com.lottery.entities.Account;
import com.lottery.repositories.AccountRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.YearMonth;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@DataJpaTest
@TestPropertySource(properties = {
        "spring.jpa.hibernate.ddl-auto=create-drop"
})
public class AccountDetailsServiceTestUsingInMemoryDb {

    @Autowired
    private AccountRepository accountRepository;

    private AccountDetailsService accountDetailsService;
    private Account testAccount;

    @Before
    public void setUp() {
        accountDetailsService = new AccountDetailsService(accountRepository);
        testAccount = new Account("Test", "EncodedPassword", "test@mail.com", "4929983287533423",
                                  YearMonth.of(2021, 12).atDay(1), "12/21");
        accountRepository.save(testAccount);
    }

    @Test
    public void shouldLoadExistingUser() {
        UserDetails user = accountDetailsService.loadUserByUsername("Test");
        assertNotNull(user);
        assertTrue(user instanceof Account);
        assertEquals(testAccount, user);
    }

    @Test
    public void shouldThrowForNonExistingUser() {
        assertThrows(UsernameNotFoundException.class, () -> accountDetailsService.loadUserByUsername("DoesNotExist"));
    }
}