create or replace procedure random_lottery_draws(range in int)
as
    r_draw_time     date;
    r_draw_type_id  number(19);
    lottery_draw_id number(19);
begin
    for i in 1 ..range
        loop
            r_draw_time := SYSDATE + DBMS_RANDOM.value(0, 365 + 1);
            select id
            into r_draw_type_id
            from (select id
                  from DRAW_TYPE
                  order by DBMS_RANDOM.VALUE())
            where rownum = 1;
            insert into LOTTERY_DRAW values (LOTTERY_DRAW_SEQUENCE.nextval, r_draw_time, null, r_draw_type_id);
            lottery_draw_id := LOTTERY_DRAW_SEQUENCE.currval;
            for price_weight in (select hits_count
                                 from LOTTERY_DRAW ld
                                          join DRAW_TYPE dt on ld.DRAW_TYPE_ID = dt.ID
                                          join PRICE_WEIGHT pw on dt.ID = pw.DRAW_TYPE_ID
                                 where ld.ID = lottery_draw_id)
                loop
                    DBMS_OUTPUT.PUT_LINE(price_weight.HITS_COUNT);
                    insert into PRICE values (PRICE_SEQUENCE.nextval, price_weight.HITS_COUNT, null, lottery_draw_id);
                end loop;
        end loop;
    commit;
end;
/