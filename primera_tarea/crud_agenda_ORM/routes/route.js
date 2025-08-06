const express = require('express');
const router = express.Router();
const AppDataSource = require('../database/db');
const crud = require('../controllers/crud');

router.get('/', async (req, res) => {
  try {
    const agendaRepo = AppDataSource.getRepository('Agenda');
    const result = await agendaRepo.find();
    res.render('index', { result });
  } catch (error) {
    res.send('Error al obtener registros: ' + error.message);
  }
});

router.get('/create', (req, res) => {
  res.render('create');
});

router.get('/edit/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const agendaRepo = AppDataSource.getRepository('Agenda');
    const agenda = await agendaRepo.findOneBy({ agendaID: id });
    res.render('edit', { agenda });
  } catch (error) {
    res.send('Error al obtener el registro');
  }
});

router.get('/delete/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const agendaRepo = AppDataSource.getRepository('Agenda');
    await agendaRepo.delete({ agendaID: id });
    res.redirect('/');
  } catch (error) {
    res.send('Error al eliminar el registro');
  }
});

router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;
