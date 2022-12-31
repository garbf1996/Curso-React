const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostEvents = new Schema({
  title: { type: String, required: true },
  notes: { type: String },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  //Pidir re ferecia de usurio
  user: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});

// Para que no se muestre el __v y _id
PostEvents.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("Events", PostEvents);
