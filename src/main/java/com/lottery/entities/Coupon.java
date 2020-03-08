package com.lottery.entities;

import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Data
public class Coupon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Timestamp betTime;
    @OneToMany(mappedBy = "coupon")
    private List<Entry> entries;
    @ManyToOne //TODO: Might be not optimal (eager fetch).
    @JoinColumn(name = "user_id")
    private User user;
}
