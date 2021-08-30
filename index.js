require("dotenv").config();

var express = require("express");
var { graphqlHTTP } = require("express-graphql");

require("./config/database");

const { resolvers } = require("./infra/graphQL/resolvers");
const { schema } = require("./infra/graphQL/schema");

var app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(3000);
