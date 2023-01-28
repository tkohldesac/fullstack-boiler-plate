const client = require('knex')({
  client: 'pg',
  connection: {
    user: 'postgres',
    host: 'localhost',
    database: 'example_db'
  }
});

module.exports = client;