/*
Rutas de Usuario / Auth
host + /api/auth
*/

const { Router } = require("express");

const routes = Router();

const {
  crearUsuario,
  loginUsurio,
  revalidarToken,
} = require("../controller/auth");

routes.post("/new", crearUsuario);
console.log(crearUsuario);

routes.post("/", loginUsurio);

routes.get("/renew", revalidarToken);

module.exports = routes;
