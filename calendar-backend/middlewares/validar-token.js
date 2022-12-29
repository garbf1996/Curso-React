//validar token

const jwt = require("jsonwebtoken");
const { response } = require("express");

const validarToken = (req, res = response, next) => {
  // Leer el token del header

  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No hay token en la petición",
    });
  }
  try {
    const { uid, name } = jwt.verify(token, process.env.JWT_toke);
    req.uid = uid;
    req.name = name;
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      ok: false,
      msg: "Token no válido",
    });
  }
  next();
};

module.exports = { validarToken };
