const mongoose = require("mongoose");
/* user model with schema  */

let User = mongoose.model("User", {
  email: {
    type: String,
    minlength: 1,
    trim: true,
    required: true
  },
  password: {
    type: String,
    minlength: 8,
    required: true
  }
});

module.exports = { User }