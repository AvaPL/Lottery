package com.lottery.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class DrawType {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private int entryCost;
    private int numbersCount;
    @OneToMany(mappedBy = "drawType")
    private List<LotteryDraw> lotteryDraws;
    @OneToMany(mappedBy = "drawType")
    private List<PriceWeight> priceWeights;
}
