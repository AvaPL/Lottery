package com.lottery.entities;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Entity
@Data
@NoArgsConstructor(access = AccessLevel.PRIVATE, force = true)
@RequiredArgsConstructor
public class Account implements UserDetails {
    @Id
    @SequenceGenerator(name = "ACCOUNT_GENERATOR", sequenceName = "ACCOUNT_SEQUENCE", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ACCOUNT_GENERATOR")
    private Long id;
    @NotNull
    @Column(unique = true)
    private final String username;
    @NotNull
    private final String password;
    @NotNull
    @Column(unique = true)
    private final String email;
    @NotNull
    @Column(unique = true)
    private final String creditCardNumber;
    @NotNull
    private final LocalDate creditCardExpirationDate;
    @NotNull
    private final String cvv;
    @OneToMany(mappedBy = "account")
    private List<Coupon> coupons;
    @ManyToMany
    @JoinTable(
            name = "account_role",
            joinColumns = @JoinColumn(name = "account_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private List<Role> roles;

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



