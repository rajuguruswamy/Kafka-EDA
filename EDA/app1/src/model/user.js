const { sequelize } = require('../config/db');
const { Model, DataTypes } = require('sequelize');

class User extends Model {}
User.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  { sequelize, modelName: 'user' }
);

module.exports = User;
