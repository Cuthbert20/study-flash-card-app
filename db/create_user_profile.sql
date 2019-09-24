INSERT INTO user_cards (username, user_img, hash, user_email)
VALUES
(${username}, ${user_img}, ${password}, ${user_email})
RETURNING *;