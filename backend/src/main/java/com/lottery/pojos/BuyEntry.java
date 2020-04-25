package com.lottery.pojos;

import lombok.Data;

import java.util.List;

@Data
public class BuyEntry {
    private long id;
    private List<Integer> numbers;
    private String lotteryType;
}
