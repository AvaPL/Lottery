package com.lottery;

import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Data
public class LotteryDraw {

    @RequiredArgsConstructor
    @Getter
    public enum DrawType {
        LOTTO(2.5f),
        MINI_LOTTO(1.5f),
        EURO_JACKPOT(5),
        MULTI_MULTI(3);

        private final float entryPriceEuro;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private Timestamp drawTime;
    private DrawType drawType;
    private int numbers;
    @OneToMany(mappedBy = "lotteryDraw")
    private List<Entry> entries;
}

