const { Router } = require("express");
const router = Router();
const { validarToken } = require("../middlewares/validar-token");
const { validarCompos } = require("../middlewares/validar-camos");
const { check } = require("express-validator");
const { isDate } = require("../jwt/isDate");

const {
  getEventos,
  craeEvents,
  updateEvents,
  deleteEvents,
} = require("../controller/events");

router.use(validarToken);

// Toda tienes que pasar por la validación del JWT

//*Insertar, actualizar, borrar, obtener eventos*//

// Obtener el evento

router.get("/", getEventos);

// Crear un nuevo evento
router.post(
  // v
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "La fecha de inicio es obligatoria").custom(isDate),
    check("end", "La fecha de finalización es obligatoria").custom(isDate),

    validarCompos,
  ],
  craeEvents
);

// Actualizar evento
router.put("/:id", updateEvents);

// Borrar evento
router.delete("/:id", deleteEvents);

module.exports = router;
