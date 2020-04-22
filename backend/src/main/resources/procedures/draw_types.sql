-- Populate the DRAW_TYPE table
create or replace procedure draw_types
as
begin
    insert into DRAW_TYPE values (DRAW_TYPE_SEQUENCE.nextval, 5, 49, 'Lotto', 6);
    insert into DRAW_TYPE values (DRAW_TYPE_SEQUENCE.nextval, 3, 30, 'Mini Lotto', 5);
    insert into DRAW_TYPE values (DRAW_TYPE_SEQUENCE.nextval, 2.5, 40, 'Multi Multi', 4);
    insert into DRAW_TYPE values (DRAW_TYPE_SEQUENCE.nextval, 10, 60, 'Euro Jackpot', 6);
    commit;
end;
/