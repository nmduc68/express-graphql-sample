var { buildSchema } = require("graphql");

// construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type User {
    id: String,
    name: String,
    age: Int,
    address: String
  }

  type Query {
    listUsers: [User]
    getUserById(id: String): User
  }

  input CreateUserPayload {
    name: String,
    age: Int,
    address: String
  }

  type Mutation {
    createUser(input: CreateUserPayload): User
    deleteUser(id: String): String
  }
`);

module.exports = {
  schema,
};
