const { Router } = require("express");
const router = Router();
const { validarToken } = require("../middlewares/validar-token");

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
router.post("/", craeEvents);

// Actualizar evento
router.put("/:id", updateEvents);

// Borrar evento
router.delete("/:id", deleteEvents);

module.exports = router;
