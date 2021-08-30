const { GraphQLObjectType, GraphQLString } = require("graphql");

const { UserModel } = require("../database/schema/userSchema");
const { UserType, CreateUserType, Void } = require("./types");
const { Types } = require("mongoose");

const RootMutation = new GraphQLObjectType({
  name: "rootMutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        input: { type: CreateUserType },
      },
      resolve: async (parent, args) => {
        const newUser = new UserModel(args.input);
        return await newUser.save();
      },
    },

    deleteUser: {
      type: Void,
      args: {
        id: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        const objId = Types.ObjectId(args.id);
        await UserModel.deleteOne(objId);
      },
    },
  },
});

module.exports = {
  RootMutation,
};
