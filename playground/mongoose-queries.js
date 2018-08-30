const { ObjectID } = require("mongodb");

const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");
const { User } = require("../server/models/user");

const id = "5b87d0d39ada331948c0903c";

// Todo.find({ _id: id }).then(todos =>
//   console.log("Todos: ", JSON.stringify(todos, undefined, 2))
// );

// Todo.findOne({ _id: id }).then(todo =>
//   console.log("Todo: ", JSON.stringify(todo, undefined, 2))
// );

// Todo.findById({ _id: id }).then(todo =>
//   console.log("Todo: ", JSON.stringify(todo, undefined, 2))
// );

User.findById({ _id: id })
  .then(doc => {
    if (!doc) {
      return console.log("Id not found");
    }
    console.log("\User by ID:\n\n", JSON.stringify(doc, undefined, 2));
  })
  .catch(e => console.log(e));
