const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Agenda = sequelize.define('agenda', {
  agendaID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombres: {
    type: DataTypes.STRING
  },
  apellidos: {
    type: DataTypes.STRING
  },

  fecha_nacimiento: {
    type: DataTypes.STRING
  }, 
   direccion: {
    type: DataTypes.STRING
  },
  celular: {
    type: DataTypes.STRING
  },
    correo: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'agenda',
  timestamps: false
});

module.exports = Agenda;
