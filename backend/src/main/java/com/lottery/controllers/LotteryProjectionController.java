package com.lottery.controllers;

import com.lottery.projections.LotteryProjection;
import com.lottery.repositories.JdbcLotteryProjectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class LotteryProjectionController {

    private JdbcLotteryProjectionRepository lotteryProjectionRepository;

    @Autowired
    public LotteryProjectionController(JdbcLotteryProjectionRepository lotteryProjectionRepository) {
        this.lotteryProjectionRepository = lotteryProjectionRepository;
    }

    @GetMapping("/current")
    public List<LotteryProjection> getCurrentLotteries(){
        return lotteryProjectionRepository.getCurrentLotteries();
    }
}
