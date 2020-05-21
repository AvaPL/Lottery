package com.lottery.controllers;

import com.lottery.email.EmailService;
import com.lottery.entities.Account;
import com.lottery.entities.Coupon;
import com.lottery.entities.Entry;
import com.lottery.entities.LotteryDraw;
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

import java.util.Optional;

@RestController
@RequestMapping("${spring.data.rest.base-path}")
@Slf4j
public class PerformLotteryController {

    private LotteryDrawRepository lotteryDrawRepository;
    private EntryRepository entryRepository;
    private EmailService emailService;

    @Autowired
    public PerformLotteryController(LotteryDrawRepository lotteryDrawRepository, EntryRepository entryRepository, EmailService emailService) {
        this.lotteryDrawRepository = lotteryDrawRepository;
        this.entryRepository = entryRepository;
        this.emailService = emailService;
    }

    @PostMapping("/performLotteryDraw/{id}")
    public ResponseEntity<Void> performLotteryDraw(@PathVariable Long id) {
        Optional<LotteryDraw> lottery = lotteryDrawRepository.findById(id);
        if(lottery.isEmpty()) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        log.info("Performing lottery draw with id: " + id);
        lotteryDrawRepository.performLotteryDraw(id);
        String[] emails = getParticipantsEmails(id);
        log.info("Participants' emails: " + String.join(", ", emails));
        emailService.sendLotteryPerformedNotifications(emails, lottery.get());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    private String[] getParticipantsEmails(Long lotteryDrawId) {
        return entryRepository.findAllByLotteryDraw_Id(lotteryDrawId).stream()
                .map(Entry::getCoupon).distinct()
                .map(Coupon::getAccount).distinct()
                .map(Account::getEmail).toArray(String[]::new);
    }
}
