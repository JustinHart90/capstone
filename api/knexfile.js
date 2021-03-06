
require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/coinsight'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
