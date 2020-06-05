package com.lottery.security;

import com.lottery.entities.Account;
import com.lottery.repositories.AccountRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.time.YearMonth;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(MockitoJUnitRunner.class)
public class AccountDetailsServiceTest {

    @Mock
    private AccountRepository mockAccountRepository;
    private Account testAccount;
    private AccountDetailsService accountDetailsService;

    @Before
    public void setUp() {
        testAccount = new Account("Andrzej", "Password", "andrzej@gmail.com",
                "4929983287533423", YearMonth.of(2021, 12).atDay(31), "123");
        accountDetailsService = new AccountDetailsService(mockAccountRepository);
        Mockito.when(mockAccountRepository.findAccountByUsername("Andrzej")).thenReturn(testAccount);
    }

    @Test
    public void shouldLoadUserByUsername() {
        UserDetails accountFound = accountDetailsService.loadUserByUsername("Andrzej");
        assertNotNull(accountFound);
        assertTrue(accountFound instanceof Account);
        assertEquals(testAccount, accountFound);
    }

    @Test
    public void shouldThrowOnNonExistingUser() {
        assertThrows(UsernameNotFoundException.class, () -> accountDetailsService.loadUserByUsername("NonExistingUsername"));
    }
}