package com.lottery.security;

import com.lottery.entities.Account;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;
import java.time.YearMonth;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class RegistrationFormTest {

    private RegistrationForm registrationForm;
    private PasswordEncoder passwordEncoder;

    @BeforeEach
    void setUp() {
        registrationForm = new RegistrationForm();
        registrationForm.setUsername("TestUsername");
        registrationForm.setPassword("TestPassword");
        registrationForm.setRepeatPassword("TestPassword");
        registrationForm.setEmail("test@mail.com");
        registrationForm.setCreditCardNumber("4929983287533423");
        registrationForm.setCreditCardExpirationDate("12/21");
        registrationForm.setCvv("123");
        passwordEncoder = new BCryptPasswordEncoder();
    }

    @Test
    void convertsToAccount() {
        Account account = registrationForm.toAccount(passwordEncoder);
        assertEquals(registrationForm.getUsername(), account.getUsername());
        assertEquals(registrationForm.getEmail(), account.getEmail());
        assertEquals(registrationForm.getCreditCardNumber(), account.getCreditCardNumber());
        LocalDate creditCardExpirationDate = YearMonth.of(2021, 12).atDay(1);
        assertEquals(creditCardExpirationDate, account.getCreditCardExpirationDate());
        assertEquals(registrationForm.getCvv(), account.getCvv());
    }

    @Test
    void encryptsPassword() {
        Account account = registrationForm.toAccount(passwordEncoder);
        assertTrue(passwordEncoder.matches(registrationForm.getPassword(), account.getPassword()));
    }
}