const { response } = require("express");

const getEventos = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Get events",
  });
};

const craeEvents = (req, res = response) => {
  console.log(req.body);
  res.json({
    ok: true,
    msg: "Event created",
  });
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
