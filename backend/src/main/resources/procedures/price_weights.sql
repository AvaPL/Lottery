-- Populate the PRICE_WEIGHT table
create or replace procedure price_weights
as
    p_draw_type_id number(19);
begin

    select id
    into p_draw_type_id
    from DRAW_TYPE
    where NAME = 'Lotto';

    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 3, 50, p_draw_type_id);
    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 4, 500, p_draw_type_id);
    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 5, 5000, p_draw_type_id);
    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 6, 10000, p_draw_type_id);

    select id
    into p_draw_type_id
    from DRAW_TYPE
    where NAME = 'Mini Lotto';

    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 4, 120, p_draw_type_id);
    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 5, 1000, p_draw_type_id);

    select id
    into p_draw_type_id
    from DRAW_TYPE
    where NAME = 'Multi Multi';

    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 3, 70, p_draw_type_id);
    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 4, 800, p_draw_type_id);

    select id
    into p_draw_type_id
    from DRAW_TYPE
    where NAME = 'Euro Jackpot';

    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 3, 100, p_draw_type_id);
    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 4, 500, p_draw_type_id);
    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 5, 5000, p_draw_type_id);
    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 6, 10000, p_draw_type_id);

    commit;
end;
/