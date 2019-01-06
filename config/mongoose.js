const mongoose = require("mongoose");
const { mongo } = require("./config");

mongoose.Promise = Promise;

const mongoUri = mongo.host;

// print mongoose logs in dev env
if (mongo.debug) {
  mongoose.set("debug", (collectionName, method, query, doc) => {
    debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
  });
}

mongoose.connection.on("connected", err => {
  console.log("Successfully connected to the database!");
});

mongoose.connection.on("disconnected", err => {
  console.log("Disconnected to the database!");
});

mongoose.connection.on("error", err => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

exports.connect = () => {
  mongoose.connect(
    mongoUri,
    {
      keepAlive: 1,
      useNewUrlParser: true
    }
  );

  return mongoose.connection;
};
