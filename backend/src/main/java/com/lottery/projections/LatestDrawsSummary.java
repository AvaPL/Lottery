package com.lottery.projections;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.lottery.converters.NumberConverter;
import lombok.Data;
import org.hibernate.annotations.Immutable;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Timestamp;

@Immutable
@Entity
@Data
//@Subselect("select *\n" +
//           "from (select LD.id, DT.name as type, LD.draw_time as draw_date, E.price_won as price_won, numbers\n" +
//           "      from LOTTERY_DRAW LD\n" +
//           "               join DRAW_TYPE DT on LD.DRAW_TYPE_ID = DT.ID\n" +
//           "               join (select LD.id, sum(E.price_won) as price_won\n" +
//           "                     from LOTTERY_DRAW LD\n" +
//           "                              join ENTRY E on LD.ID = E.LOTTERY_DRAW_ID\n" +
//           "                     group by LD.id) E on LD.ID = E.id\n" +
//           "      where LD.NUMBERS is not null\n" +
//           "      order by LD.DRAW_TIME DESC)\n" +
//           "where ROWNUM <= 10")
public class LatestDrawsSummary {
    @Id
    private Long id;
    private String type;
    private Timestamp drawDate;
    private Float priceWon;
    private Long numbers;

    @JsonGetter
    public Integer[] getNumbers() {
        return NumberConverter.toArray(numbers);
    }
}
