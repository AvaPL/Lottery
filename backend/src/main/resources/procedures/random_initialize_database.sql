create or replace procedure random_initialize_database(accounts_count in int, lottery_draws_count in int,
                                                       coupons_count in int, entries_count in int)
as
begin
    RANDOM_ACCOUNTS(accounts_count);
    DRAW_TYPES();
    PRICE_WEIGHTS();
    RANDOM_LOTTERY_DRAWS(lottery_draws_count);
    RANDOM_COUPONS(coupons_count);
    RANDOM_ENTRIES(entries_count);
end;
/