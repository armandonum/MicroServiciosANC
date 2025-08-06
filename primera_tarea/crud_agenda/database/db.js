const mysql=require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port:3307,
    password: '',
    database:'crudAgenda'
})

conexion.connect((error)=> {
    if(error) {
        console.log('Error al conectar a las base de datos: ',error)
    return
    }

    console.log("conectado aexitosamente la base de datos ");
})


module.exports = conexion;