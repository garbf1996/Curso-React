const { response } = require("express");
const PostEvents = require("../model/Events");

const getEventos = async (req, res = response) => {
  const events = await PostEvents.find().populate("user", "name");
  res.json({
    ok: true,
    events,
  });
};

const craeEvents = async (req, res = response) => {
  //console.log(req.body);
  const event = new PostEvents(req.body);
  try {
    event.user = req.uid;
    const eventDB = await event.save();

    res.json({
      ok: true,
      event: eventDB,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const updateEvents = async (req, res = response) => {
  const eventId = req.params.id;
  const uid = req.uid;

  try {
    const event = await PostEvents.findById(eventId);
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: "Event not found",
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tiene privilegio de editar este evento",
      });
    }

    const newEvent = {
      ...req.body,
      user: uid,
    };
    const eventUpdated = await PostEvents.findByIdAndUpdate(eventId, newEvent, {
      new: true,
    });

    console.log(eventUpdated);

    res.json({
      ok: true,
      event: eventUpdated,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const deleteEvents = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Event deleted",
  });
};

module.exports = {
  getEventos,
  craeEvents,
  updateEvents,
  deleteEvents,
};
