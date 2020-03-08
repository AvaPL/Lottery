package com.lottery;

import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Timestamp;

@Entity
@Data
public class LotteryDraw {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private Timestamp drawTime;
    private DrawType drawType;
    private int numbers;

    @RequiredArgsConstructor
    @Getter
    public enum DrawType {
        LOTTO(2.5f),
        MINI_LOTTO(1.5f),
        EURO_JACKPOT(5),
        MULTI_MULTI(3);

        private final float entryPriceEuro;
    }


}

