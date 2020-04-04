package com.lottery.repositories;

import com.lottery.projections.LotteryProjection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.List;

@Repository
public class JdbcLotteryProjectionRepository implements LotteryProjectionRepository {

    private JdbcTemplate jdbc;

    @Autowired
    public JdbcLotteryProjectionRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    @Override
    public List<LotteryProjection> getCurrentLotteries() {
        return jdbc.query("select DT.name as type, draw_time as next_draw, P.price\n" +
                                   "from LOTTERY_DRAW LD\n" +
                                   "         join DRAW_TYPE DT on LD.DRAW_TYPE_ID = DT.ID\n" +
                                   "         join (select LD.id, count(*) * MAX(dt.ENTRY_COST) as price\n" +
                                   "               from LOTTERY_DRAW LD\n" +
                                   "                        join DRAW_TYPE DT on LD.DRAW_TYPE_ID = DT.ID\n" +
                                   "                        join ENTRY E on LD.ID = E.LOTTERY_DRAW_ID\n" +
                                   "               where DRAW_TIME > SYSDATE\n" +
                                   "               group by LD.id) P on LD.id = P.id\n" +
                                   "where DRAW_TIME > SYSDATE", this::mapRowToLotteryProjection);
    }

    private LotteryProjection mapRowToLotteryProjection(ResultSet resultSet, int rowNumber) throws SQLException {
        Timestamp nextDraw = Timestamp.valueOf(resultSet.getString("next_draw"));
        float price = Float.parseFloat(resultSet.getString("price"));
        return new LotteryProjection(resultSet.getString("type"), nextDraw, price);
    }
}
