package com.lottery.email;

import com.lottery.converters.NumberConverter;
import com.lottery.entities.DrawType;
import com.lottery.entities.LotteryDraw;
import org.jetbrains.annotations.NotNull;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessagePreparator;

import javax.mail.internet.MimeMessage;
import java.io.InputStream;
import java.time.LocalDate;
import java.util.Arrays;

import static org.junit.Assert.*;

class EmailServiceTest {

    private JavaMailSenderMock mockMailSender;
    private EmailService emailService;

    @BeforeEach
    void setUp() {
        mockMailSender = new JavaMailSenderMock();
        emailService = new EmailService(mockMailSender);
    }

    @Test
    void shouldSendCorrectMessage() {
        String[] recipients = {"andrzej@gmail.com"};
        LotteryDraw lotteryDraw = createLotteryDraw();
        emailService.sendLotteryPerformedNotifications(recipients, lotteryDraw);
        SimpleMailMessage messageSent = mockMailSender.getSentMessage();

        assertEquals("Lottery Team <noreply@lottery.com>", messageSent.getFrom());
        assertArrayEquals(recipients, messageSent.getTo());
        assertEquals("Lottery - check if you are the lucky winner!", messageSent.getSubject());
        assertNotNull(messageSent.getText());
        assertTrue(messageSent.getText().contains(
                "We'd like to inform you that the lottery " + lotteryDraw.getDrawType().getName()));
        assertTrue(messageSent.getText().contains("has reached its end on " + lotteryDraw.getDrawTime()));
        assertTrue(messageSent.getText().contains("The numbers " + getNumbersString(lotteryDraw) + " were drawn."));
    }

    private LotteryDraw createLotteryDraw() {
        LotteryDraw lotteryDraw = new LotteryDraw();
        lotteryDraw.setDrawTime(LocalDate.of(2020, 7, 1));
        lotteryDraw.setNumbers(12345L);
        lotteryDraw.setDrawType(createDrawType());
        return lotteryDraw;
    }

    private DrawType createDrawType() {
        DrawType drawType = new DrawType();
        drawType.setName("Lotto");
        return drawType;
    }

    private String getNumbersString(LotteryDraw lotteryDraw) {
        return Arrays.toString(NumberConverter.toArray(lotteryDraw.getNumbers()));
    }

    private static class JavaMailSenderMock implements JavaMailSender {
        private SimpleMailMessage message;

        @Override
        public void send(@NotNull SimpleMailMessage message) {
            this.message = message;
        }

        @Override
        public void send(@NotNull SimpleMailMessage... simpleMailMessages) throws MailException {
        }

        public SimpleMailMessage getSentMessage() {
            return message;
        }

        @NotNull
        @Override
        public MimeMessage createMimeMessage() {
            throw new UnsupportedOperationException();
        }

        @NotNull
        @Override
        public MimeMessage createMimeMessage(@NotNull InputStream inputStream) throws MailException {
            throw new UnsupportedOperationException();
        }

        @Override
        public void send(@NotNull MimeMessage mimeMessage) throws MailException {
            throw new UnsupportedOperationException();
        }

        @Override
        public void send(@NotNull MimeMessage... mimeMessages) throws MailException {
            throw new UnsupportedOperationException();
        }

        @Override
        public void send(@NotNull MimeMessagePreparator mimeMessagePreparator) throws MailException {
            throw new UnsupportedOperationException();
        }

        @Override
        public void send(@NotNull MimeMessagePreparator... mimeMessagePreparators) throws MailException {
            throw new UnsupportedOperationException();
        }
    }
}