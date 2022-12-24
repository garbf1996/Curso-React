const { response } = require("express");
const { validationResult } = require("express-validator");

//Funcio para crear usuario
const crearUsuario = (req, res = response) => {
  const { name, email, password } = req.body;

  const errors = validationResult(req);

  // Validando si exicte un error
  if (!errors.isEmpty()) {
    return res.status(400).json({ ok: false, errors: errors.mapped() });
  }

  res.status(201).json({
    ok: true,
    mgs: "registro",
    name,
    email,
    password,
  });
};

//Funcio de login
const loginUsurio = (req, res = response) => {
  const { email, password } = req.body;
  // Validando si exicte un error
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ ok: false, errors: errors.mapped() });
  }

  res.status(400).json({
    ok: true,
    mgs: "login",
    email,
    password,
  });
};

const revalidarToken = (req, res) => {
  res.json({
    ok: true,
    mgs: "renew",
  });
};

module.exports = {
  crearUsuario,
  loginUsurio,
  revalidarToken,
};
