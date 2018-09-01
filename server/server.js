const _ = require("lodash");
const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  console.log(
    `\n[Request] POST => [Route] /todos\n\n${JSON.stringify(
      req.body,
      undefined,
      3
    )}`
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
      console.log(JSON.stringify(todos, undefined, 2));
    },
    err => res.status(400).send(err)
  );
});

app.get("/todos/:id", (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send({ err: "Error: invalid todo id" });
  }

  Todo.findById(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send({ err: "Error! todo not found" });
      }
      res.send({ todo });
    })
    .catch(() => res.status(400).send());
});

app.delete("/todos/:id", (req, res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send({ err: "Error: invalid todo id" });
  }
  Todo.findByIdAndRemove(id)
    .then(todo => {
      if (!todo) return res.status(404).send({ err: "Error! todo not found" });
      res.status(200).send({ todo });
    })
    .catch(err => res.status(400).send());
});

app.patch("/todos/:id", (req, res) => {
  let { id } = req.params;
  let body = _.pick(req.body, ["text", "completed"]);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }
  Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
    .then(todo => {
      if (!todo) {
        res.status(404).send();
      }
      res.send({ todo });
    })
    .catch(err => {
      res.status(400).send();
    });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = { app };
