const express = require("express");
const knex = require("knex");


const knexConfiguration = {
  // client answers: which type (sqlite, postgres, mysql, oracle) of database?
  client: "sqlite3", // the db driver
  // the rest will depend on the type of database
  connection: {
    filename: "./data/produce.db3"
  }, // could be a sting or an object
  useNullAsDefault: true // ONLY needed for SQLite
};

// db represents a connection to the db
const db = knex(knexConfiguration);

const router = express.Router();

router.get("/", (req, res) => {
  db("fruits")
    .then(fruits => {
      res.json(fruits);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve fruits" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("fruits")
    .where({ id })
    .first()
    .then(fruit => {
      res.json(fruit);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve fruit" });
    });
});

router.post("/", (req, res) => {
  const fruitData = req.body;
  db("fruits")
    .insert(fruitData) // with SQLite, by default this returns an array with the last id
    .then(ids => {
      db("fruits")
        .where({ id: ids[0] })
        .then(newFruitEntry => {
          res.status(201).json(newFruitEntry);
        });
    })
    .catch(err => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store data" });
    });
});

module.exports = router;
