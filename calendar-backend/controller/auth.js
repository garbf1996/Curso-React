const { response } = require("express");

//Funcio para crear usuario
const crearUsuario = (req, res = response) => {
  const { name, email, password } = req.body;

  if (name.length < 5) {
    return res.status(400).json({
      ok: false,
      mgs: "el nombre no es correctos",
    });
  }
  res.json({
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
  res.json({
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
