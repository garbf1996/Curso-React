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

const updateEvents = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Event updated",
  });
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
