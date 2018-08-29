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
    //   .find({ _id: ObjectID("5b8701e493b82e22f0ff531a") })
    //   .toArray()
    //   .then(docs => console.log(JSON.stringify(docs, undefined, 2)))
    //   .catch(err => console.log(err));

    // db.collection("Users")
    //   .find({ name: "Manal Liaquat" })
    //   .count()
    //   .then(count =>
    //     console.log(`There are ${count} users with the same name.`)
    //   )
    //   .catch(err => console.log("Unable to find users", err));

    db.collection("Users")
      .find({ name: "Manal Liaquat" })
      .toArray()
      .then(users => {
        console.log(JSON.stringify(users, undefined, 2));
        console.log(
          `There are ${users.length} users with name "${users[0].name}."`
        );
      })
      .catch(err => console.log("Unable to find users", err));

    // database.close();
  }
);
