-- Populate LOTTERY_DRAW with random data
create or replace procedure random_lottery_draws(amount in int)
as
    r_draw_time     date;
    r_draw_type_id  number(19);
    lottery_draw_id number(19);
begin
    for i in 1 ..amount
        loop
            -- Pick a random draw date in following year
            r_draw_time := SYSDATE + DBMS_RANDOM.value(0, 365 + 1);

            -- Pick a random draw type from existing ones
            select id
            into r_draw_type_id
            from (select id
                  from DRAW_TYPE
                  order by DBMS_RANDOM.VALUE())
            where rownum = 1;

            -- Insert picked random values
            insert into LOTTERY_DRAW values (LOTTERY_DRAW_SEQUENCE.nextval, r_draw_time, null, r_draw_type_id);

            lottery_draw_id := LOTTERY_DRAW_SEQUENCE.currval;

            -- Insert a price row for every hits_count in particular draw type
            for price_weight in (select hits_count
                                 from LOTTERY_DRAW ld
                                          join DRAW_TYPE dt on ld.DRAW_TYPE_ID = dt.ID
                                          join PRICE_WEIGHT pw on dt.ID = pw.DRAW_TYPE_ID
                                 where ld.ID = lottery_draw_id)
                loop
                    insert into PRICE values (PRICE_SEQUENCE.nextval, price_weight.HITS_COUNT, null, lottery_draw_id);
                end loop;
        end loop;

    commit;
end;
/