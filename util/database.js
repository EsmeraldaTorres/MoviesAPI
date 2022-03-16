const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: '' + process.env.DB_PASSWORD,
  port: 5432,
  database: process.env.DB,
  dialect: 'postgres'
  //   storage: 'path/to/database.sqlite'
});

module.exports = { sequelize };
