package com.lottery.projections;

import lombok.Data;
import org.hibernate.annotations.Immutable;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Timestamp;

@Immutable
@Entity
@Data
//@Subselect("select LD.id, DT.name as type, draw_time as next_draw, P.price\n" +
//           "from LOTTERY_DRAW LD\n" +
//           "         join DRAW_TYPE DT on LD.DRAW_TYPE_ID = DT.ID\n" +
//           "         join (select LD.id, count(*) * MAX(dt.ENTRY_COST) as price\n" +
//           "               from LOTTERY_DRAW LD\n" +
//           "                        join DRAW_TYPE DT on LD.DRAW_TYPE_ID = DT.ID\n" +
//           "                        join ENTRY E on LD.ID = E.LOTTERY_DRAW_ID\n" +
//           "               where LD.NUMBERS is null\n" +
//           "               group by LD.id) P on LD.id = P.id\n" +
//           "order by LD.DRAW_TIME")
public class CurrentLotterySummary {
    @Id
    private Long id;
    private String type;
    private Timestamp nextDraw;
    private Float price;
}
