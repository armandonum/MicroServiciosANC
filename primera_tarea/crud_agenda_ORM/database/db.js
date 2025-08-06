
const { DataSource } = require('typeorm');
const path = require('path');
const Agenda = require(path.join(__dirname, '../models/agenda'));

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: '',
  database: 'crudAgenda',
  entities: [Agenda],
  synchronize: false, // true solo para desarrollo
  logging: false,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

module.exports = AppDataSource;
