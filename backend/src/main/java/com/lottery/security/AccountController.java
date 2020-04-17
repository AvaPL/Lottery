package com.lottery.security;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("${spring.data.rest.base-path}")
public class AccountController {

    @GetMapping("/basicauth")
    public ResponseEntity<Void> authenticate() {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<Void> register(@RequestBody RegistrationForm form) {
        //TODO: Add validation.
        System.out.println(form);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
