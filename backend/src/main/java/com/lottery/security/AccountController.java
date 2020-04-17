package com.lottery.security;

import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("${spring.data.rest.base-path}")
public class AccountController {

    @GetMapping("/basicauth")
    public ResponseEntity<Void> authenticate() {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<List<String>> register(@Valid @RequestBody RegistrationForm form,
                                                 BindingResult bindingResult) {
        System.out.println(form);
        if (bindingResult.hasErrors())
            return new ResponseEntity<>(bindingResult.getAllErrors().stream().map(
                    ObjectError::getDefaultMessage).collect(Collectors.toList()), HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
