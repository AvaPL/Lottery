package com.lottery.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Role {
    @Id
    @SequenceGenerator(name = "ROLE_GENERATOR", sequenceName = "ROLE_SEQUENCE", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ROLE_GENERATOR")
    private Long id;
    private String name;
    @ManyToMany(mappedBy = "roles")
    private List<Account> accounts;
}
