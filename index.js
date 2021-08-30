require("dotenv").config();

const express = require("express");
const { graphqlHTTP } = require("express-graphql");

require("./config/database");

const { appSchema } = require("./infra/graphQL");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: appSchema,
    graphiql: true,
  })
);

app.listen(3000);
