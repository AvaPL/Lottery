package com.lottery.entities;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Data
@NoArgsConstructor(access = AccessLevel.PRIVATE, force = true)
@RequiredArgsConstructor
public class Coupon {
    @Id
    @SequenceGenerator(name = "COUPON_GENERATOR", sequenceName = "COUPON_SEQUENCE", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "COUPON_GENERATOR")
    private Long id;
    @NotNull
    private Timestamp betTime;
    @OneToMany(mappedBy = "coupon")
    private List<Entry> entries;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "account_id")
    private final Account account;

    @PrePersist
    private void prePersist() {
        betTime = new Timestamp(System.currentTimeMillis());
    }
}
