const mongoose = require("mongoose");

//Funcion de conexion de servidor

const dbConexion = async () => {
  //Cartura de error
  try {
    await mongoose.connect(process.env.DB_CNC);

    console.log("Servidor conectado");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  dbConexion,
};
