INSERT INTO User (username, password) VALUES
('Pawel', 'admin'),
('Agnieszka', 'admin');

INSERT INTO Coupon (user_id, bet_time) VALUES
(1, '2020-01-23 02:52:52'),
(1, '2017-12-23 15:11:22'),
(1, '2019-04-04 00:41:33'),
(2, '2017-06-08 20:35:56'),
(2, '2018-09-29 04:18:20');

INSERT INTO Lottery_Draw (draw_time, draw_type, numbers) VALUES
('2017-08-25 06:24:52', 'MULTI_MULTI', 54321),
('2017-11-14 22:40:23', 'LOTTO', 12345);

INSERT INTO Entry (coupon_id, lottery_draw_id, numbers) VALUES
(1, 1, 12467),
(1, 2, 36498),
(2, 1, 12347),
(2, 1, 35679),
(2, 1, 45738),
(3, 1, 16798),
(3, 2, 45679),
(3, 2, 57985),
(4, 1, 34687),
(4, 2, 56784),
(4, 2, 15649),
(5, 1, 23469);
