const { response } = require("express");
const { validationResult } = require("express-validator");

const validarCompos = (req, res = response, next) => {
  const errors = validationResult(req);

  // Validando si exicte un error
  if (!errors.isEmpty()) {
    return res.status(400).json({ ok: false, errors: errors.mapped() });
  }

  next();
};

module.exports = {
  validarCompos,
};
