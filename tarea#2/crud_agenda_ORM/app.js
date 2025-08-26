const express = require('express');
const app = express();
const AppDataSource = require('./database/db');
const crudRoutes = require('./routes/route');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente');
    app.use('/', crudRoutes);
    app.listen(5000, () => console.log('Servidor corriendo en el puerto 5000'));
  })
  .catch((err) => console.error('Error al inicializar la base de datos:', err));
