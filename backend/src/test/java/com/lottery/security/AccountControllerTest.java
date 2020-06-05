package com.lottery.security;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lottery.entities.Account;
import com.lottery.repositories.AccountRepository;
import com.lottery.repositories.RoleRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(AccountController.class)
public class AccountControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @MockBean
    private AccountRepository accountRepository;
    @MockBean
    private RoleRepository roleRepository;
    @MockBean
    private AccountDetailsService accountDetailsService;

    @Before
    public void setUp() {
        Mockito.when(accountRepository.save(Mockito.any(Account.class))).thenAnswer(i -> i.getArguments()[0]);
    }

    @Test
    public void authenticatesUsingBasicAuth() throws Exception {
        mockMvc.perform(get("/api/basicauth"))
               .andExpect(status().isOk());
    }

    @Test
    public void createsUserOnPost() throws Exception {
        RegistrationForm registrationForm = createValidRegistrationForm();
        String formJson = new ObjectMapper().writeValueAsString(registrationForm);
        mockMvc.perform(post("/api/register").content(formJson).contentType(MediaType.APPLICATION_JSON))
               .andExpect(status().isCreated());
        Account savedAccount = getSavedAccount();
        assertNotNull(savedAccount);
        Account registrationFormAccount = registrationForm.toAccount(passwordEncoder);
        assertEquals(registrationFormAccount.getUsername(), savedAccount.getUsername());
        assertEquals(registrationFormAccount.getEmail(), savedAccount.getEmail());
        assertEquals(registrationFormAccount.getCreditCardNumber(), savedAccount.getCreditCardNumber());
        assertEquals(registrationFormAccount.getCreditCardExpirationDate(), savedAccount.getCreditCardExpirationDate());
        assertEquals(registrationFormAccount.getCvv(), savedAccount.getCvv());
    }

    private RegistrationForm createValidRegistrationForm() {
        RegistrationForm registrationForm = new RegistrationForm();
        registrationForm.setUsername("TestUsername");
        registrationForm.setPassword("TestPassword123");
        registrationForm.setRepeatPassword("TestPassword123");
        registrationForm.setEmail("test@mail.com");
        registrationForm.setCreditCardNumber("4929983287533423");
        registrationForm.setCreditCardExpirationDate("12/21");
        registrationForm.setCvv("123");
        return registrationForm;
    }

    private Account getSavedAccount() {
        ArgumentCaptor<Account> accountArgumentCaptor = ArgumentCaptor.forClass(Account.class);
        Mockito.verify(accountRepository).save(accountArgumentCaptor.capture());
        return accountArgumentCaptor.getValue();
    }

    @Test
    public void shouldReturnErrorsForInvalidRegistrationForm() throws Exception {
        RegistrationForm registrationForm = createInvalidRegistrationForm();
        String formJson = new ObjectMapper().writeValueAsString(registrationForm);
        MvcResult postResult =
                mockMvc.perform(post("/api/register").content(formJson).contentType(MediaType.APPLICATION_JSON)
                                                     .accept(MediaType.APPLICATION_JSON))
                       .andExpect(status().isBadRequest()).andReturn();
        String content = postResult.getResponse().getContentAsString();
        Set<String> errors = new ObjectMapper().readValue(content, new TypeReference<>() {});
        Set<String> expectedErrors = Stream.of(
                "Username must be between 3 and 30 characters",
                "Invalid credit card number",
                "Invalid credit card CVV number",
                "Invalid email address",
                "Date should be formatted as MM/YY",
                "Password must be minimum 8 characters long and contain at least one capital letter and at least one digit",
                "Passwords must match"
        ).collect(Collectors.toSet());
        assertEquals(expectedErrors, errors);
    }

    private RegistrationForm createInvalidRegistrationForm() {
        RegistrationForm registrationForm = new RegistrationForm();
        registrationForm.setUsername("A"); // Too short
        registrationForm.setPassword("123"); // Not safe enough
        registrationForm.setRepeatPassword("321"); // Not matching with previous
        registrationForm.setEmail("mail.com");
        registrationForm.setCreditCardNumber("123");
        registrationForm.setCreditCardExpirationDate("123/321"); // Wrong format
        registrationForm.setCvv("12345"); // Too long
        return registrationForm;
    }
}