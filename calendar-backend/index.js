const express = require("express");
require("dotenv").config();
const bodyparse = require("body-parser");
const { dbConexion } = require("./data/config");
const cros = require("cors");

// Crear el servidor de express

const app = express();
dbConexion();

//Configurar CORS
app.use(cros());
app.use(bodyparse.json());

app.use(bodyparse.urlencoded({ extended: true }));

//Directorio publico
app.use(express.static("public"));

//Rutas
app.use("/api/auth", require("./routes/auth"));
//TODO: CRUD: Eventos
app.use("/api/events", require("./routes/events"));

//Lectura y parseo del boby

app.use(express.json());

//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
