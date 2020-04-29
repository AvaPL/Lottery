create or replace procedure random_coupons(amount in int, batch_size in int default 10000)
as
    seed       varchar2(100);
    r_bet_time timestamp;
    r_account_id number(19);
begin
    -- Pick a seed for RNG
    seed := TO_CHAR(SYSTIMESTAMP, 'YYYYDDMMHH24MISSFFFF');
    DBMS_RANDOM.SEED(seed);

    -- Insert coupons populated with random data
    for i in 1 ..amount
        loop
            -- Pick a random bet time in last 100 days
            r_bet_time := SYSDATE - DBMS_RANDOM.value(0, 100);

            -- Assign coupon to random account
            select id
            into r_account_id
            from (select id
                  from ACCOUNT
                  order by DBMS_RANDOM.VALUE())
            where rownum = 1;

            insert into COUPON
            values (COUPON_SEQUENCE.nextval, r_bet_time, r_account_id);

            -- Optimize commits
            if mod(i, batch_size) = 0 then
                commit;
            end if;
        end loop;

    commit;
end;
/