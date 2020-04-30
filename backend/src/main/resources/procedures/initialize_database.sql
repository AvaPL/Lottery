create or replace procedure initialize_database
as
begin
    DRAW_TYPES();
    PRICE_WEIGHTS();
    ROLES();
end;
/