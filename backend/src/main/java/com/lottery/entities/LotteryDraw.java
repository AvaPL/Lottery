package com.lottery.entities;

import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Data
public class LotteryDraw {
    @Id
    @GeneratedValue
    private Long id;
    private Timestamp drawTime;
    private long numbers;
    @OneToMany(mappedBy = "lotteryDraw")
    private List<Entry> entries;
    @OneToMany(mappedBy = "lotteryDraw")
    private List<Price> prices;
    @ManyToOne
    @JoinColumn(name = "draw_type_id")
    private DrawType drawType;
}

