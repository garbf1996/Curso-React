//Funcio para crear usuario
const crearUsuario = (req, res) => {
  res.json({
    ok: true,
    mgs: "registro",
  });
};

//Funcio de login
const loginUsurio = (req, res) => {
  res.json({
    ok: true,
    mgs: "login",
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
