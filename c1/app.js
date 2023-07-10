// go povikuvame express modulot
const express = require("express");
// go povikuvame mongoose modulot
const mongoose = require("mongoose");
// Mongoose e biblioteka za modeliranje na podatoci vo MongoDB baza, koja e bazirana vrz MongoDb i obezbeduva povisoko nivo na apstrakcija slicno kako sto e eksrpress za Node.js

// povikuvame kontrolor
const filmControllor = require("./controllers/filmController");

// inicijaliziravme expreess aplikacija ...
const app = express();

// se parsiraat informaciite sto gi prakjame od forma od frontend
app.use(express.urlencoded({ extended: true }));

// so metodot connect vospostavuvame konekcija so bazata na podatoci MongoDB
//1 prviot argument e urlto do nashata data baza
//2 vtoriot argument e konfiguracijata za taa data baza
mongoose
  .connect(
    "mongodb+srv://aleksandar:YRzFP7MITu4YfYZo@cluster0.dle0u6v.mongodb.net/bazafilmovi?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    // se povikuva den metodot so koj metod ako e uspesno povrzana konzorime suscc
    console.log("Succesfull connection!");
  })
  .catch((err) => {
    // ili ako ima greska go pisuvame metodot catch so koj metod kje konzolirame greskata
    console.log(err);
  });

app.get("/films", filmControllor.getAllFilms);
app.post("/films", filmControllor.createFilm);

// slusanje na server
app.listen(10000, () => {
  console.log("Appliaction running");
});

// so metodot Schema definirame shablon so struktura na nashata data baza
// sozdavame primerok od toj objekt sto mozeme da go koriostime za da definirame shema
// const filmSchema = new mongoose.Schema({
//   naslov: {
//     type: String,
//     required: [true, "Mora da ima naslov"],
//   },
//   zarn: {
//     type: String,
//     required: [true, "mora da ima zanr"],
//   },
//   ocenka: {
//     type: Number,
//     default: 3,
//   },
//   vreme: {
//     type: Date,
//     default: Date.now,
//   },
// });

// Metodot mongoose.model() zema dva argumenti: imeto na kolekcijata i objektot na shemata so koja ja definiramvme strukturata na kolekcijata.
// const Film = mongoose.model("Film", filmSchema);

//kreirame nova instanca od Film modelot
// const testFilm = new Film({
//   naslov: "Avatar",
//   zarn: "Avanturisticen",
// });

// async function saveFilm() {
//   try {
//     await testFilm.save();
//     console.log("Film saved successfully");
//   } catch (err) {
//     console.log(err);
//   }
// }

// saveFilm();
