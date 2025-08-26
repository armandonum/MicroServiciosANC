const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const AppDataSource = require('../database/db');
const crud = require('../controllers/crud');

const agendaRepo = AppDataSource.getMongoRepository('Agenda');

// rutas
router.get('/', async (req, res) => {
  try {
    const result = await agendaRepo.find();
    res.render('index', { result });
  } catch (error) {
    res.send('Error al obtener registros: ' + error.message);
  }
});

router.get('/create', (req, res) => res.render('create'));

router.get('/edit/:id', async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const agenda = await agendaRepo.findOneBy({ _id: id });
    res.render('edit', { agenda });
  } catch (error) {
    res.send('Error al obtener el registro');
  }
});

router.get('/delete/:id', async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    await agendaRepo.delete(id);
    res.redirect('/');
  } catch (error) {
    res.send('Error al eliminar el registro');
  }
});

router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router; 