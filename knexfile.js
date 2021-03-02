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
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  }

};
