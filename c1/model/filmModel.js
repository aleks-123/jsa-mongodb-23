const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
  naslov: {
    type: String,
    required: [true, "Mora da ima naslov"],
  },
  zarn: {
    type: String,
    required: [true, "mora da ima zanr"],
  },
  ocenka: {
    type: Number,
    default: 3,
  },
  vreme: {
    type: Date,
    default: Date.now,
  },
});

const Film = mongoose.model("Film", filmSchema);

module.exports = Film;
