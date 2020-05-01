package com.lottery.projections;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.lottery.converters.NumberConverter;
import lombok.Data;
import org.hibernate.annotations.Immutable;
import org.hibernate.annotations.Subselect;

import javax.persistence.*;
import java.sql.Timestamp;

@Immutable
@Entity
@Data
@Subselect("select E.id, E.coupon_id, DT.name as lottery_type, LD.draw_time as draw_date, E.numbers, E.price_won\n" +
           "from ENTRY E\n" +
           "         join LOTTERY_DRAW LD on E.LOTTERY_DRAW_ID = LD.ID\n" +
           "         join DRAW_TYPE DT on LD.DRAW_TYPE_ID = DT.ID\n" +
           "order by draw_date desc, lottery_type, price_won")
public class EntrySummary {
    @Id
    @GeneratedValue //TODO: Might be not needed.
    private Long id;
    private String lotteryType;
    private Timestamp drawDate;
    private Long numbers;
    private Float priceWon;
    @ManyToOne
    @JoinColumn(name = "coupon_id")
    private CouponEntries couponEntries;

    @JsonGetter
    public Integer[] getNumbers() {
        return NumberConverter.toArray(numbers);
    }
}
