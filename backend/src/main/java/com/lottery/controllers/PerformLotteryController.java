package com.lottery.controllers;

import com.lottery.repositories.LotteryDrawRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("${spring.data.rest.base-path}")
@Slf4j
public class PerformLotteryController {

    private LotteryDrawRepository lotteryDrawRepository;

    @Autowired
    public PerformLotteryController(LotteryDrawRepository lotteryDrawRepository) {
        this.lotteryDrawRepository = lotteryDrawRepository;
    }

    @PostMapping("/performLotteryDraw/{id}")
    public ResponseEntity<Void> performLotteryDraw(@PathVariable Long id){
        lotteryDrawRepository.performLotteryDraw(id);
        log.info("Performing lottery draw with id: " + id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
