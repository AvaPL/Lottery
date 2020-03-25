INSERT INTO ACCOUNT (id, username, password) VALUES (1,'Pawel', 'admin');
INSERT INTO ACCOUNT (id, username, password) VALUES (2,'Agnieszka', 'admin');

INSERT INTO COUPON (id, account_id, bet_time) VALUES (2, 1, TO_TIMESTAMP('2017-12-23 15:11:22','YYYY-MM-DD HH24:MI:SS'));
INSERT INTO COUPON (id, account_id, bet_time) VALUES (3, 2, TO_TIMESTAMP('2017-06-08 20:35:56','YYYY-MM-DD HH24:MI:SS'));
INSERT INTO COUPON (id, account_id, bet_time) VALUES (4, 2, TO_TIMESTAMP('2018-09-29 04:18:20','YYYY-MM-DD HH24:MI:SS'));
INSERT INTO COUPON (id, account_id, bet_time) VALUES (5, 1, TO_TIMESTAMP('2019-04-04 00:41:33','YYYY-MM-DD HH24:MI:SS'));
INSERT INTO COUPON (id, account_id, bet_time) VALUES (1, 1, TO_TIMESTAMP('2020-01-23 02:52:52','YYYY-MM-DD HH24:MI:SS'));

INSERT INTO DRAW_TYPE (id, name, entry_cost, numbers_count) VALUES (1, 'Multi multi', 2.5, 4);
INSERT INTO DRAW_TYPE (id, name, entry_cost, numbers_count) VALUES (2, 'Euro jackpot', 5, 6);

INSERT INTO LOTTERY_DRAW (id, draw_time, draw_type_id, numbers) VALUES (1, TO_TIMESTAMP('2017-08-25 06:24:52','YYYY-MM-DD HH24:MI:SS'), 1, 54321);
INSERT INTO LOTTERY_DRAW (id, draw_time, draw_type_id, numbers) VALUES (2, TO_TIMESTAMP('2017-11-14 22:40:23','YYYY-MM-DD HH24:MI:SS'), 2, 12345);

INSERT INTO PRICE (id, lottery_draw_id, hits_count, price) VALUES (1, 1, 4, 400);
INSERT INTO PRICE (id, lottery_draw_id, hits_count, price) VALUES (2, 1, 2, 100);

INSERT INTO PRICE_WEIGHT (id, hits_count, weight, draw_type_id) VALUES (1, 4, 1, 1);
INSERT INTO PRICE_WEIGHT (id, hits_count, weight, draw_type_id) VALUES (2, 5, 10, 1);
INSERT INTO PRICE_WEIGHT (id, hits_count, weight, draw_type_id) VALUES (3, 6, 50, 1);

INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers) VALUES (1, 1, 1, 12467);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers) VALUES (2, 1, 2, 36498);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers) VALUES (3, 2, 1, 12347);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers) VALUES (4, 2, 1, 35679);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers) VALUES (5, 2, 1, 45738);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers) VALUES (6, 3, 1, 16798);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers) VALUES (7, 3, 2, 45679);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers) VALUES (8, 3, 2, 57985);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers) VALUES (9, 4, 1, 34687);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers) VALUES (10, 4, 2, 56784);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers) VALUES (11, 4, 2, 15649);
INSERT INTO ENTRY (id, coupon_id, lottery_draw_id, numbers) VALUES (12, 5, 1, 23469);

