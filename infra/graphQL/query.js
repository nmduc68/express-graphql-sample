const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");

const { UserModel } = require("../database/schema/userSchema");
const { UserType } = require("./types");

const RootQuery = new GraphQLObjectType({
  name: "rootQuery",
  fields: {
    listUsers: {
      type: new GraphQLList(UserType),
      resolve: async (parent, args) => {
        return await UserModel.find({});
      },
    },

    getUser: {
      type: UserType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        return await UserModel.findById(args.id);
      },
    },
  },
});

module.exports = {
  RootQuery,
};
