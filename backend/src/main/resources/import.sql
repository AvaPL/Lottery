INSERT INTO ACCOUNT VALUES (ACCOUNT_SEQUENCE.nextval, TO_DATE('12/21', 'mm/yy'), '375764936673290', '123', 'pawel@lottery.com','$2y$10$CkDoe1NOD0QbpAf4Dpbt7Od1T.TZCLKDbeViQ5FmJg2mO7VxwjB56', 'Pawel');
INSERT INTO ACCOUNT VALUES (ACCOUNT_SEQUENCE.nextval, TO_DATE('12/22', 'mm/yy'), '347016889446660', '136', 'agnieszka@lottery.com','$2y$10$CkDoe1NOD0QbpAf4Dpbt7Od1T.TZCLKDbeViQ5FmJg2mO7VxwjB56', 'Agnieszka');

INSERT INTO COUPON (id, account_id, bet_time) VALUES (COUPON_SEQUENCE.nextval, 1, TO_TIMESTAMP('2017-12-23 15:11:22','YYYY-MM-DD HH24:MI:SS'));
INSERT INTO COUPON (id, account_id, bet_time) VALUES (COUPON_SEQUENCE.nextval, 2, TO_TIMESTAMP('2017-06-08 20:35:56','YYYY-MM-DD HH24:MI:SS'));
INSERT INTO COUPON (id, account_id, bet_time) VALUES (COUPON_SEQUENCE.nextval, 2, TO_TIMESTAMP('2018-09-29 04:18:20','YYYY-MM-DD HH24:MI:SS'));
INSERT INTO COUPON (id, account_id, bet_time) VALUES (COUPON_SEQUENCE.nextval, 1, TO_TIMESTAMP('2019-04-04 00:41:33','YYYY-MM-DD HH24:MI:SS'));
INSERT INTO COUPON (id, account_id, bet_time) VALUES (COUPON_SEQUENCE.nextval, 1, TO_TIMESTAMP('2020-01-23 02:52:52','YYYY-MM-DD HH24:MI:SS'));

insert into DRAW_TYPE values (DRAW_TYPE_SEQUENCE.nextval, 5, 49, 'Lotto', 6);
insert into DRAW_TYPE values (DRAW_TYPE_SEQUENCE.nextval, 3, 30, 'Mini Lotto', 5);
insert into DRAW_TYPE values (DRAW_TYPE_SEQUENCE.nextval, 2.5, 40, 'Multi Multi', 4);
insert into DRAW_TYPE values (DRAW_TYPE_SEQUENCE.nextval, 10, 60, 'Euro Jackpot', 6);

INSERT INTO LOTTERY_DRAW (id, draw_time, draw_type_id, numbers) VALUES (LOTTERY_DRAW_SEQUENCE.nextval, TO_TIMESTAMP('2017-08-25 06:24:52','YYYY-MM-DD HH24:MI:SS'), 1, 54321);
INSERT INTO LOTTERY_DRAW (id, draw_time, draw_type_id, numbers) VALUES (LOTTERY_DRAW_SEQUENCE.nextval, TO_TIMESTAMP('2020-04-03 22:40:23','YYYY-MM-DD HH24:MI:SS'), 2, 12345);
INSERT INTO LOTTERY_DRAW (id, draw_time, draw_type_id, numbers) VALUES (LOTTERY_DRAW_SEQUENCE.nextval, TO_TIMESTAMP('2020-09-12 06:24:52','YYYY-MM-DD HH24:MI:SS'), 1, 54321);
INSERT INTO LOTTERY_DRAW (id, draw_time, draw_type_id, numbers) VALUES (LOTTERY_DRAW_SEQUENCE.nextval, TO_TIMESTAMP('2020-09-14 22:40:23','YYYY-MM-DD HH24:MI:SS'), 2, 12345);
INSERT INTO LOTTERY_DRAW (id, draw_time, draw_type_id, numbers) VALUES (LOTTERY_DRAW_SEQUENCE.nextval, TO_TIMESTAMP('2020-09-25 06:24:52','YYYY-MM-DD HH24:MI:SS'), 1, 54321);
INSERT INTO LOTTERY_DRAW (id, draw_time, draw_type_id, numbers) VALUES (LOTTERY_DRAW_SEQUENCE.nextval, TO_TIMESTAMP('2020-09-30 22:40:23','YYYY-MM-DD HH24:MI:SS'), 2, 12345);

INSERT INTO PRICE (id, lottery_draw_id, hits_count, price) VALUES (PRICE_SEQUENCE.nextval, 1, 1, 100);
INSERT INTO PRICE (id, lottery_draw_id, hits_count, price) VALUES (PRICE_SEQUENCE.nextval, 2, 2, 200);
INSERT INTO PRICE (id, lottery_draw_id, hits_count, price) VALUES (PRICE_SEQUENCE.nextval, 2, 3, 300);
INSERT INTO PRICE (id, lottery_draw_id, hits_count, price) VALUES (PRICE_SEQUENCE.nextval, 1, 4, 400);

insert into PRICE_WEIGHT values (PRICE_WEIGHT_SEQUENCE.nextval, 3, 10, (select id from DRAW_TYPE where NAME = 'Lotto'));
insert into PRICE_WEIGHT values (PRICE_WEIGHT_SEQUENCE.nextval, 4, 100, (select id from DRAW_TYPE where NAME = 'Lotto'));
insert into PRICE_WEIGHT values (PRICE_WEIGHT_SEQUENCE.nextval, 5, 1000, (select id from DRAW_TYPE where NAME = 'Lotto'));
insert into PRICE_WEIGHT values (PRICE_WEIGHT_SEQUENCE.nextval, 6, 10000, (select id from DRAW_TYPE where NAME = 'Lotto'));
insert into PRICE_WEIGHT values (PRICE_WEIGHT_SEQUENCE.nextval, 4, 10, (select id from DRAW_TYPE where NAME = 'Mini Lotto'));
insert into PRICE_WEIGHT values (PRICE_WEIGHT_SEQUENCE.nextval, 5, 1000, (select id from DRAW_TYPE where NAME = 'Mini Lotto'));
insert into PRICE_WEIGHT values (PRICE_WEIGHT_SEQUENCE.nextval, 3, 100, (select id from DRAW_TYPE where NAME = 'Multi Multi'));
insert into PRICE_WEIGHT values (PRICE_WEIGHT_SEQUENCE.nextval, 4, 1000, (select id from DRAW_TYPE where NAME = 'Multi Multi'));
insert into PRICE_WEIGHT values (PRICE_WEIGHT_SEQUENCE.nextval, 3, 10, (select id from DRAW_TYPE where NAME = 'Euro Jackpot'));
insert into PRICE_WEIGHT values (PRICE_WEIGHT_SEQUENCE.nextval, 4, 100, (select id from DRAW_TYPE where NAME = 'Euro Jackpot'));
insert into PRICE_WEIGHT values (PRICE_WEIGHT_SEQUENCE.nextval, 5, 1000, (select id from DRAW_TYPE where NAME = 'Euro Jackpot'));
insert into PRICE_WEIGHT values (PRICE_WEIGHT_SEQUENCE.nextval, 6, 10000, (select id from DRAW_TYPE where NAME = 'Euro Jackpot'));

INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers, price_won) VALUES (ENTRY_SEQUENCE.nextval, 1, 1, 12467, null);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers, price_won) VALUES (ENTRY_SEQUENCE.nextval, 2, 3, 12347, 45);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers, price_won) VALUES (ENTRY_SEQUENCE.nextval, 2, 4, 35679, 4.8);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers, price_won) VALUES (ENTRY_SEQUENCE.nextval, 1, 2, 36498, 5);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers, price_won) VALUES (ENTRY_SEQUENCE.nextval, 2, 5, 45738, 100);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers, price_won) VALUES (ENTRY_SEQUENCE.nextval, 3, 6, 16798, 10000);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers, price_won) VALUES (ENTRY_SEQUENCE.nextval, 3, 1, 45679, 1);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers, price_won) VALUES (ENTRY_SEQUENCE.nextval, 3, 2, 57985, 2.5);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers, price_won) VALUES (ENTRY_SEQUENCE.nextval, 4, 3, 34687, 5);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers, price_won) VALUES (ENTRY_SEQUENCE.nextval, 4, 4, 5678, 1.6);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers, price_won) VALUES (ENTRY_SEQUENCE.nextval, 4, 5, 1564, 1);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers, price_won) VALUES (ENTRY_SEQUENCE.nextval, 5, 6, 2346, null);