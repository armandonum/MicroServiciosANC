const Agenda = require('../models/agenda');

exports.save = async (req, res) => {
  try {
    await Agenda.create(req.body);
    res.redirect('/');
  } catch (error) {
    console.error(error);
  }
};

exports.update = async (req, res) => {
  try {
    const { agendaID, ...rest } = req.body;
    await Agenda.update(rest, { where: { agendaID } });
    res.redirect('/');
  } catch (error) {
    console.error(error);
  }
};
