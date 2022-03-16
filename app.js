const express = require('express');
const { sequelize } = require('./util/database');

sequelize
  .authenticate()
  .then(() => console.log('Database authenticate'))
  .catch((err) => console.log(err));
