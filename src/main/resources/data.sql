INSERT INTO User (username, password)
VALUES ('Pawel', 'admin');

INSERT INTO Coupon (user_id, bet_time)
VALUES (1, '2017-11-15 15:30:14.332');

INSERT INTO Entry (coupon_id, lottery_draw_id, numbers)
VALUES (1, 1, 12345);