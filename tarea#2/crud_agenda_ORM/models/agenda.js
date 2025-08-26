const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'Agenda',
  collection: 'agenda',
  columns: {
  _id: {
    primary: true,
    type: 'objectid',
    generated: true,
  },
  nombres: { type: 'string' },
  apellidos: { type: 'string' },
  fecha_nacimiento: { type: 'string' },
  direccion: { type: 'string' },
  celular: { type: 'string' },
  correo: { type: 'string' },
},

});
