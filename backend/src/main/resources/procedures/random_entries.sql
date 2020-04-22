create or replace procedure random_entries(range in int)
as
    seed              varchar2(100);
    r_numbers         number(19);
    r_coupon_id       number(19);
    r_lottery_draw_id number(19);
    r_numbers_count   int;
    r_max_value       int;
begin
    -- Pick a seed for RNG
    seed := TO_CHAR(SYSTIMESTAMP, 'YYYYDDMMHH24MISSFFFF');
    DBMS_RANDOM.SEED(seed);

    for i in 1 ..range
        loop
            -- Pick a random coupon
            select id
            into r_coupon_id
            from (select id
                  from COUPON
                  order by DBMS_RANDOM.VALUE())
            where rownum = 1;

            -- Pick a random lottery
            select id
            into r_lottery_draw_id
            from (select id
                  from LOTTERY_DRAW
                  order by DBMS_RANDOM.VALUE())
            where rownum = 1;

            -- Pick the numbers count for the lottery draw type
            select dt.NUMBERS_COUNT
            into r_numbers_count
            from DRAW_TYPE dt
                     join LOTTERY_DRAW ld on dt.ID = ld.DRAW_TYPE_ID
            where ld.ID = r_lottery_draw_id;

            -- Pick the max value for the lottery draw type
            select dt.MAX_VALUE
            into r_max_value
            from DRAW_TYPE dt
                     join LOTTERY_DRAW ld on dt.ID = ld.DRAW_TYPE_ID
            where ld.ID = r_lottery_draw_id;

            r_numbers := RANDOM_NUMBERS(r_numbers_count, r_max_value);

            insert into ENTRY VALUES (ENTRY_SEQUENCE.nextval, r_numbers, null, r_coupon_id, r_lottery_draw_id);
        end loop;

    commit;
end;
/