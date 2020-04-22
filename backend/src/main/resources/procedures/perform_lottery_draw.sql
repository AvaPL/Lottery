create or replace procedure perform_lottery_draw(p_lottery_draw_id in number)
as
    p_draw_type_id     number(19);
    r_numbers          number(19);
    numbers_count      int;
    max_value          int;
    total_price        float;
    total_price_weight int;
begin
    select ld.DRAW_TYPE_ID
    into p_draw_type_id
    from LOTTERY_DRAW ld
    where ld.ID = p_lottery_draw_id;

    select dt.NUMBERS_COUNT
    into numbers_count
    from DRAW_TYPE dt
    where dt.ID = p_draw_type_id;

    select dt.MAX_VALUE
    into max_value
    from DRAW_TYPE dt
    where dt.ID = p_draw_type_id;

    r_numbers := RANDOM_NUMBERS(numbers_count, max_value);

    update LOTTERY_DRAW
    set NUMBERS = r_numbers
    where ID = p_lottery_draw_id;

    -- TODO: price.price
    select count(*) * max(dt.ENTRY_COST)
    into total_price
    from ENTRY e
             join DRAW_TYPE dt on dt.ID = p_draw_type_id
    where e.LOTTERY_DRAW_ID = p_lottery_draw_id;

    select sum(pw.WEIGHT)
    into total_price_weight
    from PRICE_WEIGHT pw
    where pw.DRAW_TYPE_ID = p_draw_type_id;

    for p_price in (select p.ID, p.HITS_COUNT, pw.WEIGHT
                    from PRICE p
                             join PRICE_WEIGHT pw on p.HITS_COUNT = pw.HITS_COUNT
                    where p.LOTTERY_DRAW_ID = p_lottery_draw_id
                      and pw.DRAW_TYPE_ID = p_draw_type_id)
        loop
            update PRICE
            set PRICE = TRUNC(p_price.WEIGHT / total_price_weight * total_price, 2)
            where PRICE.ID = p_price.ID;
        end loop;
    -- TODO: entry.price_won
    commit;
end;
/