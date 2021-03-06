const express = require("express");
const app = express();
const massive = require("massive");
require("dotenv").config();
const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env;
const session = require("express-session");
const ctrl = require("./controller");

//top level middleware
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 2
    }
  })
);

//endpoints
app.post("/auth/register", ctrl.register);
app.post("/auth/login", ctrl.login);
app.post("/auth/logout", ctrl.logout);
app.get("/auth/session", ctrl.getSession);
app.get("/api/card/topics", ctrl.getTopics);
app.get("/api/question/:topicId", ctrl.getQuestions);
app.get("/api/card/topics/:topicId", ctrl.getTopic);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  app.listen(SERVER_PORT, () =>
    console.log(`${SERVER_PORT}, is now up and listening dad`)
  );
});
