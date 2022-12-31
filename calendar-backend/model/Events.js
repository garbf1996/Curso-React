const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostEvents = new Schema({
  title: { type: String, require: true },
  notes: { type: String },
  start: { type: Date, require: true },
  end: { type: Date, require: true },
  //Pidir re ferecia de usurio
  user: {
    type: Schema.Types.ObjectId,
    ref: "usuario",
  },
});

module.exports = model("Events", PostEvents);
