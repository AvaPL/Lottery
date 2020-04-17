package com.lottery.entities;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Entity
@Data
public class Account implements UserDetails {
    @Id
    @GeneratedValue
    private Long id;
    //TODO: Add unique annotation.
    private String username;
    private String password;
    private String email;
    private String creditCardNumber;
    private Timestamp creditCardExpirationDate;
    private String cvv;
    @OneToMany(mappedBy = "account")
    private List<Coupon> coupons;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        //TODO: Handle different roles.
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority("ROLE_USER");
        return Collections.singletonList(authority);
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}



