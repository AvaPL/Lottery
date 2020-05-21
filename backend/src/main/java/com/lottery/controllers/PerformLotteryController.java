package com.lottery.controllers;

import com.lottery.entities.Account;
import com.lottery.entities.Coupon;
import com.lottery.entities.Entry;
import com.lottery.repositories.EntryRepository;
import com.lottery.repositories.LotteryDrawRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("${spring.data.rest.base-path}")
@Slf4j
public class PerformLotteryController {

    private LotteryDrawRepository lotteryDrawRepository;
    private EntryRepository entryRepository;

    @Autowired
    public PerformLotteryController(LotteryDrawRepository lotteryDrawRepository, EntryRepository entryRepository) {
        this.lotteryDrawRepository = lotteryDrawRepository;
        this.entryRepository = entryRepository;
    }

    @PostMapping("/performLotteryDraw/{id}")
    public ResponseEntity<Void> performLotteryDraw(@PathVariable Long id) {
        log.info("Performing lottery draw with id: " + id);
        lotteryDrawRepository.performLotteryDraw(id);
        List<String> emails = getParticipantsEmails(id);
        log.info("Participants' emails: " + String.join(", ", emails));
        return new ResponseEntity<>(HttpStatus.OK);
    }

    private List<String> getParticipantsEmails(Long lotteryDrawId) {
        return entryRepository.findAllByLotteryDraw_Id(lotteryDrawId).stream()
                .map(Entry::getCoupon).distinct()
                .map(Coupon::getAccount).distinct()
                .map(Account::getEmail).collect(Collectors.toList());
    }
}
