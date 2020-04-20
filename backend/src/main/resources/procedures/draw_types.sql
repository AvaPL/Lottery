create or replace procedure draw_types
as
begin
    INSERT INTO DRAW_TYPE VALUES (DRAW_TYPE_SEQUENCE.nextval, 5, 'Lotto', 6);
    INSERT INTO DRAW_TYPE VALUES (DRAW_TYPE_SEQUENCE.nextval, 3, 'Mini Lotto', 5);
    INSERT INTO DRAW_TYPE VALUES (DRAW_TYPE_SEQUENCE.nextval, 2.5, 'Multi Multi', 4);
    INSERT INTO DRAW_TYPE VALUES (DRAW_TYPE_SEQUENCE.nextval, 10, 'Euro Jackpot', 6);
    commit;
end;
/