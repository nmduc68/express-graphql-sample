const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLScalarType,
} = require("graphql");

const Void = new GraphQLScalarType({
  name: "Void",

  description: "Represents NULL values",

  serialize() {
    return null;
  },

  parseValue() {
    return null;
  },

  parseLiteral() {
    return null;
  },
});

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    address: { type: GraphQLString },
  }),
});

const CreateUserType = new GraphQLInputObjectType({
  name: "CreateUserType",
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: new GraphQLNonNull(GraphQLInt) },
    address: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = {
  UserType,
  CreateUserType,
  Void,
};
