create or replace view current_lottery_summary
as
select LD.id, DT.name as type, draw_time as next_draw, P.price
from LOTTERY_DRAW LD
         join DRAW_TYPE DT on LD.DRAW_TYPE_ID = DT.ID
         join (select LD.id, count(*) * MAX(dt.ENTRY_COST) as price
               from LOTTERY_DRAW LD
                        join DRAW_TYPE DT on LD.DRAW_TYPE_ID = DT.ID
                        join ENTRY E on LD.ID = E.LOTTERY_DRAW_ID
               where LD.NUMBERS is null
               group by LD.id) P on LD.id = P.id
order by LD.DRAW_TIME;

create or replace view latest_draws_summary
as
select *
from (select LD.id, DT.name as type, LD.draw_time as draw_date, E.price_won as price_won, numbers
      from LOTTERY_DRAW LD
               join DRAW_TYPE DT on LD.DRAW_TYPE_ID = DT.ID
               join (select LD.id, sum(E.price_won) as price_won
                     from LOTTERY_DRAW LD
                              join ENTRY E on LD.ID = E.LOTTERY_DRAW_ID
                     group by LD.id) E on LD.ID = E.id
      where LD.NUMBERS is not null
      order by LD.DRAW_TIME DESC)
where ROWNUM <= 10;

create or replace view my_coupons
as
select username
from ACCOUNT;

create or replace view coupon_summary
as
select C.id, A.USERNAME, C.BET_TIME, E.number_of_entries, E.price_won
from ACCOUNT A
         join COUPON C on A.ID = C.ACCOUNT_ID
         join(select C.id, count(*) as number_of_entries, sum(E.PRICE_WON) as price_won
              from COUPON C
                       join ENTRY E on C.ID = E.COUPON_ID
              group by C.id) E on C.id = E.id
order by C.BET_TIME DESC;

create or replace view coupon_entries
as
select id
from COUPON;

create or replace view entry_summary
as
select E.id, E.coupon_id, DT.name as lottery_type, LD.draw_time as draw_date, E.numbers, E.price_won
from ENTRY E
         join LOTTERY_DRAW LD on E.LOTTERY_DRAW_ID = LD.ID
         join DRAW_TYPE DT on LD.DRAW_TYPE_ID = DT.ID
order by draw_date desc, lottery_type, price_won;
