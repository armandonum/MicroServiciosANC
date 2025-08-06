
const AppDataSource = require('../database/db');

exports.save = async (req, res) => {
  try {
    const agendaRepo = AppDataSource.getRepository('Agenda');
    await agendaRepo.save(req.body);
    res.redirect('/');
  } catch (error) {
    console.error('Error al guardar:', error);
    res.send('Error al guardar');
  }
};

exports.update = async (req, res) => {
  try {
    const { agendaID, ...rest } = req.body;
    const agendaRepo = AppDataSource.getRepository('Agenda');

    const agenda = await agendaRepo.findOneBy({ agendaID: parseInt(agendaID) });

    if (!agenda) {
      return res.send('Registro no encontrado');
    }


    Object.assign(agenda, rest);

    await agendaRepo.save(agenda);
    res.redirect('/');
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.send('Error al actualizar');
  }
};
