const { GraphQLSchema } = require("graphql");
const { RootQuery } = require("./query");
const { RootMutation } = require("./mutation");

const appSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

module.exports = {
  appSchema,
};
