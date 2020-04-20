create or replace procedure price_weights
as
begin
    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 3, 10, (select id from DRAW_TYPE where NAME = 'Lotto'));
    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 4, 100, (select id from DRAW_TYPE where NAME = 'Lotto'));
    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 5, 1000, (select id from DRAW_TYPE where NAME = 'Lotto'));
    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 6, 10000, (select id from DRAW_TYPE where NAME = 'Lotto'));
    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 4, 10, (select id from DRAW_TYPE where NAME = 'Mini Lotto'));
    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 5, 1000, (select id from DRAW_TYPE where NAME = 'Mini Lotto'));
    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 3, 100, (select id from DRAW_TYPE where NAME = 'Multi Multi'));
    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 4, 1000, (select id from DRAW_TYPE where NAME = 'Multi Multi'));
    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 3, 10, (select id from DRAW_TYPE where NAME = 'Euro Jackpot'));
    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 4, 100, (select id from DRAW_TYPE where NAME = 'Euro Jackpot'));
    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 5, 1000, (select id from DRAW_TYPE where NAME = 'Euro Jackpot'));
    insert into PRICE_WEIGHT
    values (PRICE_WEIGHT_SEQUENCE.nextval, 6, 10000, (select id from DRAW_TYPE where NAME = 'Euro Jackpot'));
end;
/