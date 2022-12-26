const { response } = require("express");
const Usuario = require("../model/Usuario");

/*Funcio para crear usuario*/
const crearUsuario = async (req, res = response) => {
  try {
    //Guardano dato
    const newUser = Usuario(req.body);
    console.log(newUser);

    await newUser.save();

    res.status(201).json({
      ok: true,
      mgs: "registro",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      mgs: "Por favor hable con el administrador",
    });
  }
};

//Funcio de login
const loginUsurio = (req, res = response) => {
  const { email, password } = req.body;

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
