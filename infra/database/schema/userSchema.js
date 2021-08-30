const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  address: {
    type: String,
  },
});

const Users = mongoose.model("Users", userSchema);

module.exports = {
  userSchema,
  Users,
};
