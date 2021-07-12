require("dotenv").config();

const { AUTH_MONGO_CONNECTION_STRING } = process.env;

module.exports = {
  mongodb: {
    url: AUTH_MONGO_CONNECTION_STRING,
    options: {
      useNewUrlParser: true,
      useFindAndModify: false,
    },
  },
  migrationsDir: "migrations",
  changelogCollectionName: "migrations",
};
