// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

const dbName = "TodoApp";

MongoClient.connect(
  "mongodb://localhost:27017",
  { useNewUrlParser: true },
  (err, database) => {
    if (err) return console.log("Unable to connet to MongoDB server\n");

    console.log("Successfully connected to MongoDB server\n");

    const db = database.db(dbName);

    // db.collection("Todos")
    //   .deleteMany({ text: "3rd is here" })
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));

    // db.collection("Todos")
    //   .deleteOne({ text: "3rd is here" })
    //   .then(res => console.log(res.result))
    //   .catch(err => console.log(err));

    // db.collection("Todos")
    //   .findOneAndDelete({ completed: true })
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));

    db.collection("Users")
      .findOneAndDelete({ _id: ObjectID("5b8704814864eb22f0671db0") })
      .then(res => console.log(res))
      .catch(err => console.log(err));

    // database.close();
  }
);
