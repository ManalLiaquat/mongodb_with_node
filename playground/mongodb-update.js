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
    //   .findOneAndUpdate(
    //     { _id: new ObjectID("5b86fa434c7cdd262cf2cad0") },
    //     { $set: { completed: true } },
    //     { returnOriginal: false }
    //   )
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));

    db.collection("Users")
      .findOneAndUpdate(
        { _id: new ObjectID("5b87114d4864eb22f0671dbb") },
        {
          $set: { name: "Manal Liaquat", location: 'Karachi' },
          $inc: { age: 4 }
        },
        { returnOriginal: false }
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));

    // database.close();
  }
);
