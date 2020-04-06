package com.lottery.projections;

import com.fasterxml.jackson.annotation.JsonGetter;
import lombok.Data;
import org.hibernate.annotations.Immutable;
import org.hibernate.annotations.Subselect;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Timestamp;

@Immutable
@Entity
@Data
@Subselect("select *\n" +
        "from (\n" +
        "         select ld.id, dt.name as type, ld.DRAW_TIME as draw_date, p.price_won as price_won, numbers\n" +
        "         from LOTTERY_DRAW LD\n" +
        "                  join DRAW_TYPE DT on ld.DRAW_TYPE_ID = dt.ID\n" +
        "                  join (select ld.id, sum(p.price) as price_won\n" +
        "                        from LOTTERY_DRAW LD\n" +
        "                                 join PRICE P on LD.ID = P.LOTTERY_DRAW_ID\n" +
        "                        group by ld.id) P on ld.ID = p.id\n" +
        "         where ld.DRAW_TIME < SYSDATE\n" +
        "         order by ld.DRAW_TIME DESC)\n" +
        "where ROWNUM <= 10")
public class LatestDrawsSummary {
    @Id
    @GeneratedValue
    private Long id;
    private String type;
    private Timestamp drawDate;
    private float priceWon;
    private int numbers;

    @JsonGetter
    public int[] getNumbers(){
        //TODO: implement
        return new int[]{1, 2, 3, 4, 5, 6};
    }
}
