package com.lottery.security;

import com.lottery.entities.Account;
import lombok.Data;
import lombok.SneakyThrows;
import org.hibernate.validator.constraints.CreditCardNumber;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;

@Data
public class RegistrationForm {
    @NotNull
    @Size(min = 3, max = 30, message = "Username must be between 3 and 30 characters")
    private String username;
    @NotNull
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
            message = "Password must be minimum 8 characters long and contain at least one capital letter and at least one digit")
    private String password;
    @NotNull
    private String repeatPassword;
    @NotNull
    @Email(message = "Invalid email address")
    private String email;
    @NotNull
    @CreditCardNumber(message = "Invalid credit card number")
    private String creditCardNumber;
    @NotNull
    @Pattern(regexp = "^\\d{2}/\\d{2}$", message = "Date should be formatted as MM/YY")
    private String creditCardExpirationDate;
    @NotNull
    @Pattern(regexp = "^\\d{3}$", message = "Invalid credit card CVV number")
    private String cvv;

    public Account toAccount(PasswordEncoder passwordEncoder) {
        LocalDate cardExpirationDate =
                YearMonth.parse(creditCardExpirationDate, DateTimeFormatter.ofPattern("MM/yy")).atDay(1);
        return new Account(username, passwordEncoder.encode(password), email, creditCardNumber, cardExpirationDate,
                           cvv);
    }
}
