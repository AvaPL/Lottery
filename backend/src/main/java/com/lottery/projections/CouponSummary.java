package com.lottery.projections;

import lombok.Data;
import org.hibernate.annotations.Immutable;
import org.hibernate.annotations.Subselect;

import javax.persistence.*;
import java.sql.Timestamp;

@Immutable
@Entity
@Data
@Subselect(
        "select C.id, A.USERNAME, C.BET_TIME, E.number_of_entries, E.price_won\n" +
                "from ACCOUNT A\n" +
                "         join COUPON C on A.ID = C.ACCOUNT_ID\n" +
                "         join(select C.id, count(*) as number_of_entries, sum(E.PRICE_WON) as price_won\n" +
                "              from COUPON C\n" +
                "                       join ENTRY E on C.ID = E.COUPON_ID\n" +
                "              group by C.id) E on C.id = E.id")
public class CouponSummary {
    @Id
    @GeneratedValue //TODO: Might be not needed.
    private Long id;
    private Timestamp betTime;
    private int numberOfEntries;
    private Float priceWon;
    @ManyToOne
    @JoinColumn(name = "username")
    private MyCoupons myCoupons;
}