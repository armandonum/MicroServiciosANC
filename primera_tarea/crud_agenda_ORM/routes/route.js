const express = require('express');
const router = express.Router();
const Agenda = require('../models/agenda');
const crud = require('../controllers/crud');

router.get('/', async (req, res) => {
  try {
    const result = await Agenda.findAll();
res.render('index.ejs', { result});
 } catch (error) {
  res.send('Error al obtener registros: ' + error.message);
}

});

router.get('/create', (req, res) => {
  res.render('create');
});

router.get('/edit/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const agenda = await Agenda.findByPk(id);
    res.render('edit', { agenda });
  } catch (error) {
    res.send('Error al obtener el registro');
  }
});

router.get('/delete/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await Agenda.destroy({ where: { agendaID: id } });
    res.redirect('/');
  } catch (error) {
    res.send('Error al eliminar el registro');
  }
});

router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;
