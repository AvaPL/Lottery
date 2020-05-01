create or replace procedure initialize_database
as
begin
    TRUNCATE_TABLES();
    RESET_SEQUENCES();
    DRAW_TYPES();
    PRICE_WEIGHTS();
    ROLES();
end;
/