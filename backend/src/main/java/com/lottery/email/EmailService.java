package com.lottery.email;

import com.lottery.converters.NumberConverter;
import com.lottery.entities.LotteryDraw;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class EmailService {

    public static final String NOREPLY_LOTTERY_COM = "Lottery Team <noreply@lottery.com>";
    private JavaMailSender mailSender;

    @Autowired
    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendLotteryPerformedNotifications(String[] recipients, LotteryDraw lottery) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(NOREPLY_LOTTERY_COM);
        message.setTo(recipients);
        message.setSubject("Lottery - check if you are the lucky winner!");
        message.setText(getLotteryPerformedNotificationText(lottery));
        mailSender.send(message);
    }

    @NotNull
    private String getLotteryPerformedNotificationText(LotteryDraw lottery) {
        String numbers = Arrays.toString(NumberConverter.toArray(lottery.getNumbers()));
        return "Hi!\n\nWe'd like to inform you that the lottery " + lottery.getDrawType().getName() +
                " you participated in has reached its end on " + lottery.getDrawTime() + ".\n" +
                "The numbers " + numbers + " were drawn. Are you the lucky winner?\n\n" +
                "Check here: http://localhost:3000/my-coupons\n\n" +
                "We wish you luck,\n" +
                "Lottery Team";
    }
}
