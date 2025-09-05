const { AppDataSource } = require("../data-source");

const resolvers = {
  Query: {
    getLibros: async () => {
      return await AppDataSource.getRepository("Libro").find({
        relations: ["prestamos"],
      });
    },

    getPrestamos: async (_, { usuario }) => {
      const repo = AppDataSource.getRepository("Prestamo");

      if (usuario) {
        return await repo.find({
          where: { usuario },
          relations: ["libro"],
        });
      }

      return await repo.find({ relations: ["libro"] });
    },

    getLibroById: async (_, { id }) => {
      return await AppDataSource.getRepository("Libro").findOne({
        where: { id },
        relations: ["prestamos"],
      });
    },
  },

  Mutation: {
    createPrestamo: async (_, { usuario, fecha_prestamo, fecha_devolucion, libroid }) => {
      const repoPrestamo = AppDataSource.getRepository("Prestamo");
      const repoLibro = AppDataSource.getRepository("Libro");

      const libro = await repoLibro.findOneBy({ id: libroid });
      if (!libro) throw new Error("Libro no encontrado");

      const prestamo = repoPrestamo.create({
        usuario,
        fecha_prestamo,
        fecha_devolucion,
        libro,
      });

      return await repoPrestamo.save(prestamo);
    },

    createLibro: async (_, { titulo, autor, isbn, anio_publicacion }) => {
      const repoLibro = AppDataSource.getRepository("Libro");
      const libro = repoLibro.create({ titulo, autor, isbn, anio_publicacion });
      return await repoLibro.save(libro);
    },
  },
};

module.exports = resolvers;
