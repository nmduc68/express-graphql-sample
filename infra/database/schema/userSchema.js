const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    address: {
      type: String,
    },
  },
  { versionKey: false }
);

const UserModel = mongoose.model("Users", userSchema);

module.exports = {
  userSchema,
  UserModel,
};
