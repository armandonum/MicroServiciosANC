const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'mysql', 
    user: 'user',
    password: 'userpass',
    database: 'usuariosdb',
    port: 3306
});

conexion.connect((error) => {
    if (error) {
        console.log('Error al conectar a la base de datos: ', error);
        return;
    }
    console.log("Conectado exitosamente a la base de datos");
});

module.exports = conexion;