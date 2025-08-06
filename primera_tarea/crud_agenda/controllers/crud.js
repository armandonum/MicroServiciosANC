const conexion=require('../database/db');


exports.save = (req,res) =>{
const titulo=req.body.titulo;
const descripcion=req.body.descripcion;
const actividad=req.body.actividad;
const fecha=req.body.fecha;
const lugar=req.body.lugar;
conexion.query('INSERT INTO agenda SET ?',{titulo:titulo,descripcion:descripcion,actividad:actividad, fecha:fecha,lugar:lugar},(error,results) =>{
if(error){
    console.log(error)
}else
{
    res.redirect('/');
}
})
}

exports.update = (req,res) =>{
const agendaID=req.body.agendaID;
const titulo=req.body.titulo;
const descripcion=req.body.descripcion;
const actividad=req.body.actividad;
const fecha=req.body.fecha;
const lugar=req.body.lugar;
conexion.query('UPDATE  agenda SET ? WHERE agendaID=?',[{titulo:titulo,descripcion:descripcion,actividad:actividad, fecha:fecha,lugar:lugar, },agendaID],(error,results) =>{
if(error){
    console.log(error)
}else
{
    res.redirect('/');
}
})
}