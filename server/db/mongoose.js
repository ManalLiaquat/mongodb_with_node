var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGOLAB_URI,
  { useNewUrlParser: true }
);
console.log(`process.env.MONGOLAB_URI ****** ${process.env.MONGOLAB_URI} => FILE:(mongoose.js)`);

module.exports = { mongoose };
