-- Populate ACCOUNT with random data
create or replace procedure random_accounts(range in int)
as
    seed                          varchar2(100);
    r_credit_card_expiration_date date;
    r_credit_card_number          varchar2(255);
    r_cvv                         varchar2(255);
    r_email                       varchar2(255);
    r_password                    varchar2(255);
    r_username                    varchar2(255);
begin
    -- Pick a seed for RNG
    seed := TO_CHAR(SYSTIMESTAMP, 'YYYYDDMMHH24MISSFFFF');
    DBMS_RANDOM.SEED(seed);

    -- Insert accounts populated with random data
    for i in 1 ..range
        loop
            r_username := DBMS_RANDOM.STRING('a', TRUNC(DBMS_RANDOM.value(10, 31)));
            r_credit_card_expiration_date := SYSDATE + DBMS_RANDOM.value(0, 365 * 5 + 1);
            r_credit_card_number := TRUNC(DBMS_RANDOM.VALUE(1e13, 1e20));
            r_cvv := TRUNC(DBMS_RANDOM.VALUE(1e2, 1e3));
            r_email := r_username || '@gmail.com';
            r_password := r_username;
            insert into ACCOUNT
            values (ACCOUNT_SEQUENCE.nextval, r_credit_card_expiration_date, r_credit_card_number, r_cvv, r_email,
                    r_password, r_username);
        end loop;

    commit;
end;
/