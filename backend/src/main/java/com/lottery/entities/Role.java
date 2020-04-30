package com.lottery.entities;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Data
public class Role implements GrantedAuthority {
    @Id
    @SequenceGenerator(name = "ROLE_GENERATOR", sequenceName = "ROLE_SEQUENCE", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ROLE_GENERATOR")
    private Long id;
    @NotNull
    @Column(unique = true)
    private String name;
    @ManyToMany(mappedBy = "roles")
    private List<Account> accounts;

    @Override
    public String getAuthority() {
        return name;
    }
}
