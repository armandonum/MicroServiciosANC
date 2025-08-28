const express = require('express');
const router = express.Router();
const conexion = require('./database/db');
const { ObjectId } = require('mongodb');
const crud = require('./controllers/crud');

router.get('/', async (req, res) => {
  try {
    const db = await conexion();
    const result = await db.collection('tarea').find().toArray();
    res.render('index', { result });
  } catch (error) {
    console.error(error);
    res.send('Error al obtener registros');
  }
});

router.get('/create', (req, res) => res.render('create'));

router.get('/edit/:id', async (req, res) => {
  try {
    const db = await conexion();
    const tarea = await db.collection('tarea').findOne({ _id: new ObjectId(req.params.id) });
    res.render('edit', { tarea });
  } catch (error) {
    console.error(error);
    res.send('Error al obtener el registro');
  }
});

router.get('/delete/:id', crud.delete);
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;
