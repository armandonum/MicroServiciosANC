const AppDataSource = require('../database/db');
const Agenda = 'Agenda'; 

exports.save = async (req, res) => {
  try {
    const agendaRepo = AppDataSource.getMongoRepository('Agenda');

  
    await agendaRepo.insertOne(req.body);

    res.redirect('/');
  } catch (error) {
    console.error('Error al guardar:', error);
    res.send('Error al guardar');
  }
};
exports.update = async (req, res) => {
  try {
    const { _id, ...rest } = req.body;
    const agendaRepo = AppDataSource.getMongoRepository('Agenda');

    await agendaRepo.update({ _id: new ObjectId(_id) }, { $set: rest });

    res.redirect('/');
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.send('Error al actualizar');
  }
};

exports.delete = async (req, res) => {
  try {
    const agendaRepo = AppDataSource.getMongoRepository('Agenda');
    await agendaRepo.delete({ _id: new ObjectId(req.params.id) });
    res.redirect('/');
  } catch (error) {
    res.send('Error al eliminar el registro');
  }
};

