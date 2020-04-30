package com.lottery.security;

import com.lottery.entities.Account;
import com.lottery.entities.Role;
import com.lottery.repositories.AccountRepository;
import com.lottery.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("${spring.data.rest.base-path}")
public class AccountController {

    private final AccountRepository accountRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;

    @Autowired
    public AccountController(AccountRepository accountRepository,
                             PasswordEncoder passwordEncoder, RoleRepository roleRepository) {
        this.accountRepository = accountRepository;
        this.passwordEncoder = passwordEncoder;
        this.roleRepository = roleRepository;
    }

    @GetMapping("/basicauth")
    public ResponseEntity<Void> authenticate() {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<List<String>> register(@Valid @RequestBody RegistrationForm form,
                                                 BindingResult bindingResult) {
        validateUsername(form.getUsername(), bindingResult);
        validatePassword(form.getPassword(), form.getRepeatPassword(), bindingResult);
        validateEmail(form.getEmail(), bindingResult);
        if (bindingResult.hasErrors())
            return new ResponseEntity<>(getErrorsList(bindingResult), HttpStatus.BAD_REQUEST);
        accountRepository.save(convertToAccount(form));
        return new ResponseEntity<>(HttpStatus.OK);
    }

    private void validateUsername(String username,
                                  BindingResult bindingResult) {
        if (accountRepository.existsByUsername(username))
            bindingResult.addError(new ObjectError("username.unique", "Username already taken"));
    }

    private void validatePassword(String password, String repeatPassword, BindingResult bindingResult) {
        if (!password.equals(repeatPassword))
            bindingResult.addError(new ObjectError("passwords.match", "Passwords must match"));
    }

    private void validateEmail(String email, BindingResult bindingResult) {
        if (accountRepository.existsByEmail(email))
            bindingResult.addError(new ObjectError("email.unique", "Account with this email already exists"));
    }

    private List<String> getErrorsList(BindingResult bindingResult) {
        return bindingResult.getAllErrors().stream().map(
                ObjectError::getDefaultMessage).collect(Collectors.toList());
    }

    private Account convertToAccount(RegistrationForm form) {
        Account account = form.toAccount(passwordEncoder);
        List<Role> roles = Collections.singletonList(roleRepository.findByName("ROLE_USER"));
        account.setRoles(roles);
        return account;
    }
}
