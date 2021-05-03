require('dotenv').config()

module.exports = {
  development: {
    "username": process.env.DEV_USER,
    "password": process.env.DEV_PASSWORD,
    "database": process.env.DEV_DATABASE,
    "host": process.env.DEV_HOST,
    "dialect": process.env.DIALECT
  },
  test: {
    "username": process.env.TEST_USER,
    "password": process.env.TEST_PASSWORD,
    "database": process.env.TEST_DATABASE,
    "host": process.env.TEST_HOST,
    "dialect": process.env.DIALECT
  },
  production: {
    "username": process.env.PROD_USER,
    "password": process.env.PROD_PASSWORD,
    "database": process.env.PROD_DATABASE,
    "host": process.env.PROD_HOST,
    "dialect": process.env.DIALECT
  }
}
