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
        "select C.ID as id, A.USERNAME as username, C.BET_TIME as draw_date, A.ID as number_of_entries, A.ID * c.ID as price_won\n" +
        "from ACCOUNT A\n" +
        "         join COUPON C on A.ID = C.ACCOUNT_ID")
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
