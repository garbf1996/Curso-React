const { response } = require("express");
const Usuario = require("../model/Usuario");

/*Funcio para crear usuario*/
const crearUsuario = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    //Guardano dato

    let newUser = await Usuario.findOne({ email });
    console.log(newUser);
    //Validadon si el usurio exicte
    if (newUser) {
      return res.status(400).json({
        ok: false,
        mgs: "El usurio exicte",
      });
    }

    newUser = Usuario(req.body);
    await newUser.save();

    res.status(201).json({
      ok: true,
      uid: newUser.id,
      name: newUser.name,
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
