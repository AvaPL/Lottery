package com.lottery.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Account {
    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String password;
    @OneToMany(mappedBy = "account")
    private List<Coupon> coupons;
}



