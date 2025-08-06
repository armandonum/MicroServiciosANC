const conexion=require('../database/db');


exports.save = (req,res) =>{
const nombres=req.body.nombres;
const apellidos=req.body.apellidos;
const fecha_nacimiento=req.body.fecha_nacimiento;
const direccion=req.body.direccion;
const celular=req.body.celular;
const correo= req.body.correo;
conexion.query('INSERT INTO agenda SET ?',{nombres:nombres,apellidos:apellidos,fecha_nacimiento:fecha_nacimiento, direccion:direccion, celular:celular, correo:correo},(error,results) =>{
if(error){
    console.log(error)
}else
{
    res.redirect('/');
}
})
}

exports.update = (req,res) =>{
    const agendaID= req.body.agendaID;
const nombres=req.body.nombres;
const apellidos=req.body.apellidos;
const fecha_nacimiento=req.body.fecha_nacimiento;
const direccion=req.body.direccion;
const celular=req.body.celular;
const correo= req.body.correo;
conexion.query('UPDATE  agenda SET ? WHERE agendaID=?',[{nombres:nombres,apellidos:apellidos,fecha_nacimiento:fecha_nacimiento, direccion:direccion, celular:celular, correo:correo},agendaID],(error,results) =>{
if(error){
    console.log(error)
}else
{
    res.redirect('/');
}
})
}