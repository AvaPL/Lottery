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

