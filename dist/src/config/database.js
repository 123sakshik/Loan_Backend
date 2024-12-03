"use strict";
const { Sequelize } = require('sequelize');
const config = require('../config/config.json');
// allows developers to interact with databases using JavaScript objects and methods, 
// making it easier to work with databases without writing raw SQL queries. 
// Sequelize supports various database management systems, such as PostgreSQL, MySQL, SQLite, and MSSQL.
const sequel = new Sequelize(config.development);
module.exports = sequel;
