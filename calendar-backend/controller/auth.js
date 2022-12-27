const { response } = require("express");
const Usuario = require("../model/Usuario");
const bcrypt = require("bcryptjs");
const { generarToken } = require("../jwt/jwt");

/*Funcio para crear usuario*/
const crearUsuario = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    //Guardano dato

    let newUser = await Usuario.findOne({ email });

    //Validadon si el usurio exicte
    if (newUser) {
      return res.status(400).json({
        ok: false,
        mgs: "El usurio exicte",
      });
    }

    newUser = Usuario(req.body);
    //Encriptar passowrd
    const salt = bcrypt.genSaltSync();
    newUser.password = bcrypt.hashSync(password, salt);

    await newUser.save();
    //Generar Token
    const token = await generarToken(newUser.id, newUser.name);

    res.status(201).json({
      ok: true,
      uid: newUser.id,
      name: newUser.name,
      token,
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
const loginUsurio = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const newUser = await Usuario.findOne({ email });

    if (!newUser) {
      return res.status(400).json({
        ok: false,
        mgs: "El usuario no exicte con ese email",
      });
    }

    const validPassword = bcrypt.compareSync(password, newUser.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        mgs: "Password incorrecto",
      });
    }
    const token = await generarToken(newUser.id, newUser.name);

    res.json({
      ok: true,
      uid: newUser.id,
      name: newUser.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      mgs: "Por favor hable con el administrador",
    });
  }
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
