package com.lottery.entities;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Data
public class DrawType {
    @Id
    @SequenceGenerator(name = "DRAW_TYPE_GENERATOR", sequenceName = "DRAW_TYPE_SEQUENCE", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "DRAW_TYPE_GENERATOR")
    private Long id;
    @NotNull
    @Column(unique = true)
    private String name;
    @NotNull
    private Integer entryCost;
    @NotNull
    private Integer numbersCount;
    @NotNull
    private Integer maxValue;
    @OneToMany(mappedBy = "drawType")
    private List<LotteryDraw> lotteryDraws;
    @OneToMany(mappedBy = "drawType")
    private List<PriceWeight> priceWeights;
}
