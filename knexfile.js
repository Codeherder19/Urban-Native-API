// Update with your config settings.

module.exports = {

  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "me",
      password: "",
      database: "urban_native"
    },
    migrations: {
      directory: __dirname + "/migrations"
    },
    seeds: {
      directory: __dirname + "/seeds"
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + "/migrations"
    },
    seeds: {
      directory: __dirname + "/seeds"
    }
  }

};
