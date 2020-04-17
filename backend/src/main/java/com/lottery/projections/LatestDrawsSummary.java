package com.lottery.projections;

import com.fasterxml.jackson.annotation.JsonGetter;
import lombok.Data;
import org.hibernate.annotations.Immutable;
import org.hibernate.annotations.Subselect;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Immutable
@Entity
@Data
@Subselect("select *\n" +
           "from (\n" +
           "         select LD.id, DT.name as type, LD.DRAW_TIME as draw_date, P.price_won as price_won, numbers\n" +
           "         from LOTTERY_DRAW LD\n" +
           "                  join DRAW_TYPE DT on LD.DRAW_TYPE_ID = DT.ID\n" +
           "                  join (select LD.id, sum(P.price) as price_won\n" +
           "                        from LOTTERY_DRAW LD\n" +
           "                                 join PRICE P on LD.ID = P.LOTTERY_DRAW_ID\n" +
           "                        group by LD.id) P on LD.ID = P.id\n" +
           "         where LD.DRAW_TIME < SYSDATE\n" +
           "         order by LD.DRAW_TIME DESC)\n" +
           "where ROWNUM <= 10")
public class LatestDrawsSummary {
    @Id
    @GeneratedValue //TODO: Might be not needed.
    private Long id;
    private String type;
    private Timestamp drawDate;
    private Float priceWon;
    private Long numbers;

    @JsonGetter
    public Integer[] getNumbers() {
        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < 64; i++)
            if ((numbers >> i & 1) == 1)
                result.add(i + 1);
        return result.toArray(new Integer[0]);
    }
}
