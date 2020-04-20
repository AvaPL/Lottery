package com.lottery.entities;

import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Data
public class LotteryDraw {
    @Id
    @SequenceGenerator(name = "LOTTERY_DRAW_GENERATOR", sequenceName = "LOTTERY_DRAW_SEQUENCE", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "LOTTERY_DRAW_GENERATOR")
    private Long id;
    @NotNull
    private Timestamp drawTime;
    private Long numbers;
    @OneToMany(mappedBy = "lotteryDraw")
    private List<Entry> entries;
    @OneToMany(mappedBy = "lotteryDraw")
    private List<Price> prices;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "draw_type_id")
    private DrawType drawType;
}

