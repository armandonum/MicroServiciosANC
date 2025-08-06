const express = require('express');
const app = express();
const sequelize = require('./database/db');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', require('./routes/route'));

app.listen(5000, () => {
  console.log('Servidor corriendo en el puerto 5000');
});
