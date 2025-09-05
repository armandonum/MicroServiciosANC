const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Prestamo {
    id: ID!
    usuario: String!
    fecha_prestamo: String!
    fecha_devolucion: String
    libro: Libro!
  }

  type Libro {
    id: ID!
    titulo: String!
    autor: String!
    isbn: String!
    anio_publicacion: String!
    prestamos: [Prestamo!]!
  }

  type Query {
    getLibros: [Libro!]!
    getPrestamos(usuario: String): [Prestamo!]!  
    getLibroById(id: ID!): Libro
  }

  type Mutation {
    createPrestamo(
      usuario: String!
      fecha_prestamo: String!
      fecha_devolucion: String
      libroid: ID!
    ): Prestamo!

    createLibro(
      titulo: String!
      autor: String!
      isbn: String!
      anio_publicacion: String!
    ): Libro!
  }
`;

module.exports = typeDefs;
