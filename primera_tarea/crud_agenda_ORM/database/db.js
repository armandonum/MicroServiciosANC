const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crudAgenda', 'root', '', {
  host: 'localhost',
  port: 3307,
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('Conexión a DB exitosa con Sequelize'))
  .catch(err => console.error('Error de conexión:', err));

module.exports = sequelize;
