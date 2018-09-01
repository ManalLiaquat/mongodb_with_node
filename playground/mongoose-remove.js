const { ObjectID } = require("mongodb");

const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");
const { User } = require("../server/models/user");

// Todo.deleteMany({}).then(result => console.log(result));

Todo.findByIdAndRemove("5b8aab6ee90d79196c394eb5").then(doc => {
  console.log(doc);
});


// Todo.find().then(data => console.log(data));
// Todo.insertMany({text: 'Hi this is mongoos-remove.js file insertion to local DB'})