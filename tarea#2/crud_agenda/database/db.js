const { MongoClient } = require("mongodb");


const uri = "mongodb://admin:admin@localhost:27017/"; 
const dbName = "Agenda"; 

let varconexion; 

async function conexion() {
  if (varconexion) {
    return varconexion;
  }

  try {
    const cliente = new MongoClient(uri);
    await cliente.connect();
    console.log("✅ Conectado exitosamente a MongoDB");

    varconexion = cliente.db(dbName);
    return varconexion;
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error);
    throw error;
  }
}

module.exports = conexion;


