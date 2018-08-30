const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");

const app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  //   console.log(req.body);
  let newTodo = new Todo({
    text: req.body.text
  });
  newTodo.save().then(item => res.send(item), err => res.status(400).send(err));
});

app.listen(3000, () => console.log("Server is running on port 3000"));
