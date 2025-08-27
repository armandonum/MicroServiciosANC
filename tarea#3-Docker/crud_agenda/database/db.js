const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI || "mongodb://admin:admin@localhost:27017/";

let varconexion;

async function conexion() {
  if (varconexion) return varconexion;

  try {
    const cliente = new MongoClient(uri);
    await cliente.connect();
    console.log("✅ Conectado exitosamente a MongoDB");
    varconexion = cliente.db("Agenda");
    return varconexion;
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error);
    throw error;
  }
}

module.exports = conexion;
