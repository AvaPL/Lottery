package com.lottery.controllers;

import com.lottery.entities.*;
import com.lottery.pojos.BuyEntry;
import com.lottery.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("${spring.data.rest.base-path}")
public class BuyController {

    private final AccountRepository accountRepository;
    private final EntryRepository entryRepository;
    private final CouponRepository couponRepository;
    private final LotteryDrawRepository lotteryDrawRepository;
    private final DrawTypeRepository drawTypeRepository;

    @Autowired
    public BuyController(AccountRepository accountRepository, EntryRepository entryRepository,
                         CouponRepository couponRepository,
                         LotteryDrawRepository lotteryDrawRepository,
                         DrawTypeRepository drawTypeRepository) {
        this.accountRepository = accountRepository;
        this.entryRepository = entryRepository;
        this.couponRepository = couponRepository;
        this.lotteryDrawRepository = lotteryDrawRepository;
        this.drawTypeRepository = drawTypeRepository;
    }

    @PostMapping("/buy/{username}")
    public void buy(@PathVariable String username, @RequestBody List<BuyEntry> entries) {

        Account account = accountRepository.findAccountByUsername(username);
        Coupon coupon = couponRepository.save(new Coupon(account));
        for (BuyEntry entry : entries)
            saveEntry(coupon, entry);
    }

    private void saveEntry(Coupon coupon, BuyEntry entry) {
        DrawType drawType = drawTypeRepository.findByName(entry.getLotteryType());
        LotteryDraw lotteryDraw = lotteryDrawRepository.findFirstByDrawTimeAfterAndDrawTypeOrderByDrawTime(
                LocalDate.now(), drawType);
        entryRepository.save(new Entry(convertNumbers(entry.getNumbers()), coupon, lotteryDraw));
    }

    private long convertNumbers(List<Integer> numbers) {
        long result = 0;
        for (Integer number : numbers)
            result += 1 << (number - 1);
        return result;
    }
}
