const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");

const app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  console.log(
    `\n[Request] POST => [Route] /todos\n\n${JSON.stringify(req.body,undefined,3)}`
  );
  let newTodo = new Todo({
    text: req.body.text
  });
  newTodo.save().then(item => res.send(item), err => res.status(400).send(err));
});

app.get("/todos", (req, res) => {
  console.log(`\n[Request] GET => [Route] /todos\n\n`);
  Todo.find().then(
    todos => {
      res.send({ todos });
      console.log(JSON.stringify(todos,undefined,2));      
    },
    err => res.status(400).send(err)
  );
});

app.listen(3000, () => console.log("Server is running on port 3000"));

module.exports = { app };
