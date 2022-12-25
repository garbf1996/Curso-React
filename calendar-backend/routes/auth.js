/*
Rutas de Usuario / Auth
host + /api/auth
*/

const { Router } = require("express");
const { check } = require("express-validator");

const routes = Router();

const {
  crearUsuario,
  loginUsurio,
  revalidarToken,
} = require("../controller/auth");
const { validarCompos } = require("../middlewares/validar-camos");

routes.post(
  "/new",
  /*Validando  con validar-comos.js*/
  //Validando si el campo de nombre si es vacio
  [check("name", "El nombre es obligatorios").not().isEmpty()],
  //Validando si el email es valido
  [check("email", "El email no es valido").isEmail()],
  //Validando si el password  tiene 6 caracteres
  [
    check("password", "El password es obligatorios").isLength({ min: 6 }),
    validarCompos,
  ],

  crearUsuario
);

routes.post(
  //Middleware
  "/",
  [check("email", "El email no es valido").isEmail()],
  [
    check("password", "El password es obligatorios").isLength({ min: 6 }),
    validarCompos,
  ],

  loginUsurio
);

routes.get("/renew", revalidarToken);

module.exports = routes;
