const conexion=require('../database/db');


exports.save = (req,res) =>{
const nombre=req.body.nombre;
const correo= req.body.correo;
const fecha_registro= new Date();
conexion.query('INSERT INTO usuarios SET ?',{Nombre:nombre,CorreoElectronico:correo,FechaRegistro:fecha_registro},(error,results) =>{
if(error){
    console.log(error)
}else
{
    res.redirect('/');
}
})
}
