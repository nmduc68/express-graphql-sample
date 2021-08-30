const { Users } = require("../../database/schema/userSchema");
const { Types } = require("mongoose");

/**
 * GraphQL Resolvers
 **/

const resolvers = {
  listUsers: () => {
    return new Promise((resolve, reject) => {
      Users.find((err, users) => {
        if (err) reject(err);

        resolve(users);
      });
    });
  },

  getUserById: ({ id }) => {
    return new Promise((resolve, reject) => {
      Users.findById(id, (err, user) => {
        if (err) reject(err);

        resolve(user);
      });
    });
  },

  createUser: ({ input }) => {
    return new Promise((resolve, reject) => {
      const newUser = new Users(input);
      newUser.save((err, user) => {
        if (err) reject(err);

        resolve(user);
      });
    });
  },

  deleteUser: ({ id }) => {
    const objId = Types.ObjectId(id);
    return new Promise((resolve, reject) => {
      Users.deleteOne(objId, (err) => {
        if (err) reject(err);

        resolve(id);
      });
    });
  },
};

module.exports = {
  resolvers,
};
