const conexion = require('../database/db');
const { ObjectId } = require('mongodb');

exports.save = async (req, res) => {
  try {
    const db = await conexion();
    await db.collection('tarea').insertOne(req.body);
    res.redirect('/');
  } catch (error) {
    console.error('Error al guardar:', error);
    res.send('Error al guardar');
  }
};

exports.update = async (req, res) => {
  try {
    const db = await conexion();
    const id = new ObjectId(req.body.tareaid);
    const { tareaid, ...rest } = req.body;
    await db.collection('tarea').updateOne(
      { _id: id },
      { $set: rest }
    );
    res.redirect('/');
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.send('Error al actualizar');
  }
};

exports.delete = async (req, res) => {
  try {
    const db = await conexion();
    const id = new ObjectId(req.params.id);
    await db.collection('tarea').deleteOne({ _id: id });
    res.redirect('/');
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.send('Error al eliminar');
  }
};
