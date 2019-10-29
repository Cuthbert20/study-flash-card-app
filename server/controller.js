const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    try {
      const db = req.app.get("db");
      const { username, user_img, hash, user_email } = req.body;
      // console.log(req.body)
      const user = await db.find_email([user_email]);
      if (user.length > 0) {
        return res.status(400).send({ message: "Email in Use" });
      }
      const salt = bcrypt.genSaltSync(10);
      const password = bcrypt.hashSync(hash, salt);
      const newUser = await db.create_user_profile({
        username,
        user_img,
        password,
        user_email
      });
      req.session.user = newUser[0];
      // console.log(req.session.user)
      delete newUser[0].password;
      console.log(req.session.user);
      res
        .status(200)
        .send({ message: "logged in", user: req.session.user, loggedIn: true });
    } catch (err) {
      res.status(500).send({ message: "Failed to Register" });
    }
  },

  login: async (req, res) => {
    try {
      const db = req.app.get("db");
      const { username, password } = req.body;
      const user = await db.find_username([username]);
      const result = bcrypt.compareSync(password, user[0].hash);
      //     console.log("hit", result)
      // console.log(password, user[0].password);
      if (result) {
        delete user[0].password;
        req.session.user = user[0];
        console.log(req.session);
        return res.status(200).send({
          message: "Logged In",
          user: req.session.user,
          loggedIn: true
        });
      }
    } catch (err) {
      res.status(500).send({ message: "failed to login" });
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.status(200).send({ message: "logged out" });
  },
  getSession: (req, res) => {
    if (req.session) {
      res.status(200).send(req.session);
    }
  },
  getTopics: async (req, res) => {
    try {
      const db = req.app.get("db");
      const topics = await db.all_card_topics();
      res.status(200).send(topics);
    } catch (err) {
      res.status(500).send({ message: "Couldn't get topics" });
    }
  },
  getQuestions: async (req, res) => {
    try {
      const db = req.app.get("db");
      const { topicId } = req.params;
      const questions = await db.get_questions([topicId]);
      res.status(200).send(questions);
    } catch (err) {
      res.status(500).send({ message: "Couldn't get questions" });
    }
  },
  getTopic: async (req, res) => {
    try {
      const db = req.app.get("db");
      const { topicId } = req.params;
      const topic = await db.get_topic_name([topicId]);
      res.status(200).send(topic);
    } catch (err) {
      res.status(500).send({ message: "could get topic name" });
    }
  }
};
