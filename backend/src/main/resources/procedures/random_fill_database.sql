create or replace procedure random_fill_database(accounts_count in int, lottery_draws_count in int,
                                                       coupons_count in int, entries_count in int, batch_size in int default 10000)
as
begin
    RANDOM_ACCOUNTS(accounts_count, batch_size);
    RANDOM_LOTTERY_DRAWS(lottery_draws_count, batch_size);
    RANDOM_COUPONS(coupons_count, batch_size);
    RANDOM_ENTRIES(entries_count, batch_size);
end;
/