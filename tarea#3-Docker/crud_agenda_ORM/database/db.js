// database/db.js
const { DataSource } = require('typeorm');
const path = require('path');
const Agenda = require(path.join(__dirname, '../models/agenda'));

const AppDataSource = new DataSource({
  type: 'mongodb',
  url: 'mongodb://admin:admin@localhost:27017',
  entities: [Agenda],
  synchronize: true,
  logging: false,
});

module.exports = AppDataSource;
