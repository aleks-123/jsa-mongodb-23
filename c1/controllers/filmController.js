// Go povikuvame Film modelot so koj model nie moze da komunicirame so databazata
const Film = require("../model/filmModel");

exports.createFilm = async (req, res) => {
  try {
    // const newFilm = new Film({
    //   naslov: "Avatar",
    //   zarn: "Avanturisticen",
    // });
    // newFilm.save();

    //create e metoda da zacuvame dokument vo edna kolekcija
    const newFilm = await Film.create(req.body);

    // res.status(201).json({
    //   status: "success",
    //   data: {
    //     film: newFilm,
    //   },
    // });

    res.send(newFilm);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllFilms = async (req, res) => {
  try {
    // find e metoda za da gi zemime site dokumenti od enda kolekacija
    const films = await Film.find();

    res.status(200).json({
      test: "Teeestt",
      status: "success",
      data: {
        films: films,
      },
    });

    // res.send(films);
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//? ZA DOMASNA DA SE KREIRA DATABAZA BLOGOVI
//? ime na kolekcija blogs
//? da ima create i getall funkcionlanost
//? shemata da e naslov, opis, ocenka, vreme, aftor
//? na ruta "/blogs" da se povikuva i da se kreira blog
//? i da inma najmalce 10 bloga
