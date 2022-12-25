const express = require("express");
require("dotenv").config();
const bodyparse = require("body-parser");
const { dbConexion } = require("./data/config");
console.log(process.env);

// Crear el servidor de express

const app = express();
dbConexion();

app.use(bodyparse.json());

app.use(bodyparse.urlencoded({ extended: true }));

//Directorio publico
app.use(express.static("public"));

//Rutas
app.use("/api/auth", require("./routes/auth"));

//Lectura y parseo del boby

app.use(express.json());

//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
