//Include mongoose library
const mongoose = require("mongoose");

const connectStr = `${process.env.DATABASE_TYPE}://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`;

mongoose.connect(
  connectStr,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected db:", process.env.DATABASE_NAME);
  }
);

const db = mongoose.connection;

//Log an error if we fail to connect
db.on("error", (err) => {
  console.error(err);
  console.log("MongoDB connection failed: " + connectStr);

  process.exit();
});

//close the connection
const closeConnection = () => {
  db.close();
};
