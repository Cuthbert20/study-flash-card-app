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
('Carl', 'https://www.mercurynews.com/wp-content/uploads/2018/02/twd_02212018_04.jpg?w=620', 'carl@me.com');

--creating card_topics table
CREATE TABLE card_topics (
topic_id serial PRIMARY KEY,
topic_name VARCHAR(100)
)

--dummy data for card_topics
INSERT INTO card_topics (topic_name)
VALUES
('JavaScript'),
('RESTful API'),
('CSS'),
('Reactjs'),
('HTML')

--creating card_question table
CREATE TABLE card_question (
question_id serial PRIMARY KEY,
topic_id INT REFERENCES card_topics(topic_id),
question VARCHAR
)

--dummy data for card_question table
INSERT INTO card_question (topic_id, question)
VALUES
(1, 'What are the 5 JavaScript Data Types?'),
(1, 'What is the user of isNaN function?'),
(1, 'What is "this" keyword in JavaScript?')

--creating card_answer table
CREATE TABLE card_answer (
answer_id serial PRIMARY KEY,
question_id INT REFERENCES card_question(question_id),
answer VARCHAR
)

--dummy data for card_answer table
INSERT INTO card_answer (question_id, answer)
VALUES 
(1, 'Number, String, Object, Boolean, Undefined'),
(2, 'isNan function returns true if the argument is not a number otherwise it is false.'),
(3, '"this" keyword refers to the object from where it was called, can be global if used in the window. Or if used inside a function then the function is the scope of this.')
