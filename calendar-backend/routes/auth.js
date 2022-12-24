/*
Rutas de Usuario / Auth
host + /api/auth
*/

const { Router } = require("express");

const routes = Router();

routes.get("/", (req, res) => {
  res.json({
    ok: true,
  });
});

module.exports = routes;
