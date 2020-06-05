package com.lottery.email;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Import;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Properties;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@Import(EmailConfiguration.class)
public class EmailConfigurationTest {

    @Autowired
    private EmailConfiguration emailConfiguration;

    private JavaMailSenderImpl javaMailSender;
    private Properties properties;

    @Before
    public void setUp() {
        if (emailConfiguration == null) return;
        JavaMailSender beanMailSender = emailConfiguration.getJavaMailSender();
        if (beanMailSender instanceof JavaMailSenderImpl) {
            javaMailSender = (JavaMailSenderImpl) emailConfiguration.getJavaMailSender();
            properties = this.javaMailSender.getJavaMailProperties();
        }
    }

    @Test
    public void shouldCreateConfiguration() {
        assertNotNull(emailConfiguration);
    }

    @Test
    public void shouldCreateBean() {
        assertNotNull(javaMailSender);
        assertNotNull(properties);
    }

    @Test
    public void shouldHaveHostSetToMailtrap() {
        assertEquals("smtp.mailtrap.io", javaMailSender.getHost());
    }

    @Test
    public void shouldHavePort2525() {
        assertEquals(2525, javaMailSender.getPort());
    }

    @Test
    public void shouldUseSmtp() {
        assertEquals("smtp", properties.getProperty("mail.transport.protocol"));
    }

    @Test
    public void shouldUseSmtpAuth() {
        assertEquals("true", properties.getProperty("mail.smtp.auth"));
    }

    @Test
    public void shouldHaveTlsEnabled() {
        assertEquals("true", properties.getProperty("mail.smtp.starttls.enable"));
    }
}