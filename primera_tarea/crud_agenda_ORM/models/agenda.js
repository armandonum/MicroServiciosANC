const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Agenda = sequelize.define('agenda', {
  agendaID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING
  },
  descripcion: {
    type: DataTypes.STRING
  },
  actividad: {
    type: DataTypes.STRING
  },
  fecha: {
    type: DataTypes.STRING
  },
  lugar: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'agenda',
  timestamps: false
});

module.exports = Agenda;
