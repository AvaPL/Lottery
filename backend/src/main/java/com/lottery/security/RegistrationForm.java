package com.lottery.security;

import com.lottery.entities.Account;
import lombok.Data;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.sql.Timestamp;

@Data
public class RegistrationForm {
    private String username;
    private String password;
    private String repeatPassword;
    private String email;
    private String creditCardNumber;
    private String creditCardExpirationDate;
    private String cvv;

    public Account toAccount(PasswordEncoder passwordEncoder) {
        return new Account(username, passwordEncoder.encode(password), email, creditCardNumber,
                           new Timestamp(System.currentTimeMillis()), cvv); //TODO: Replace placeholder conversion.
    }
}
