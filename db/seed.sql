--usertable create
CREATE TABLE user_cards (
user_id SERIAL PRIMARY KEY,
username VARCHAR(30),
user_img TEXT,
hash TEXT, 
user_email VARCHAR(30)
);  

--dummy data for user_cards
INSERT INTO user_cards(username, user_img, user_email)
VALUES
('Rick', 'https://cnet3.cbsistatic.com/img/ysfYAw3b2Xkt2LAA4jPjIoaNSRk=/1200x675/2018/10/07/35e5b808-38cc-4b84-9d5d-da81a31ff8c6/walkingdeadgrimes.jpg', 'rick@me.com'),
('Negan', 'https://pmcvariety.files.wordpress.com/2016/04/walking-dead-jeffrey-dean-morgan-negan-season-7.jpg?w=1000', 'negan@me.com'),
('Carl', 'https://www.mercurynews.com/wp-content/uploads/2018/02/twd_02212018_04.jpg?w=620', 'carl@me.com')
