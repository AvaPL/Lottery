create or replace procedure random_coupons(range in int)
as
    seed       varchar2(100);
    r_bet_time timestamp;
    r_account_id number(19);
begin
    seed := TO_CHAR(SYSTIMESTAMP, 'YYYYDDMMHH24MISSFFFF');
    DBMS_RANDOM.SEED(seed);
    for i in 1 ..range
        loop
            r_bet_time := SYSDATE - DBMS_RANDOM.value(0, 100);
            select id
            into r_account_id
            from (select id
                  from ACCOUNT
                  order by DBMS_RANDOM.VALUE())
            where rownum = 1;
            insert into COUPON
            values (COUPON_SEQUENCE.nextval, r_bet_time, r_account_id);
        end loop;
    commit;
end;
/