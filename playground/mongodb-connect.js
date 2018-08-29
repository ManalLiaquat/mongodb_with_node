// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

let obj = new ObjectID();
console.log(obj);

const dbName = "TodoApp";

MongoClient.connect(
  "mongodb://localhost:27017",
  { useNewUrlParser: true },
  (err, database) => {
    if (err) return console.log("Unable to connet to MongoDB server");

    console.log("Successfully connected to MongoDB server");

    let db = database.db(dbName);

    // db
    //   .collection("Todos")
    //   .insertOne(
    //     {
    //       text: "Something to do",
    //       completed: false
    //     },
    //     (err, result) =>
    //       err
    //         ? console.log("Unable to insert todo", err)
    //         : console.log(JSON.stringify(result.ops, undefined, 2))
    //   );

    // db
    //   .collection("Users")
    //   .insertOne(
    //     {
    //       name: "Manal Liaquat",
    //       age: 21,
    //       location: "Karachi"
    //     },
    //     (err, result) =>
    //       err
    //         ? console.log("Unable to insert user", err)
    //         : console.log(JSON.stringify(result.ops, undefined, 2))
    //   );

    database.close();
  }
);
