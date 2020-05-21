package com.lottery.repositories;

import com.lottery.entities.DrawType;
import com.lottery.entities.LotteryDraw;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

public interface LotteryDrawRepository extends CrudRepository<LotteryDraw, Long> {

    LotteryDraw findFirstByDrawTimeAfterAndDrawTypeOrderByDrawTime(@NotNull LocalDate drawTime,
                                                                   @NotNull DrawType drawType);

    @Procedure("PERFORM_LOTTERY_DRAW")
    void performLotteryDraw(Long p_lottery_draw_id);

}
