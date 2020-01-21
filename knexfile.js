// Update with your config settings.

module.exports = {
  development: {
    // client answers: which type (sqlite, postgres, mysql, oracle) of database?
    client: "sqlite3", // the db driver
    // the rest will depend on the type of database
    connection: {
      filename: "./data/produce.db3"
    }, // could be a sting or an object
    useNullAsDefault: true, // ONLY needed for SQLite

    migrations: {
      directory: "./data/migrations"
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};

// npm 1 -g knex or just use npx knex for commands
// knex init
// copy from fruits router the config object to knexfile.js
// add the migrations key to the knexfile.js
// run: knex migrate:make songs_table