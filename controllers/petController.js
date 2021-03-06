const Pets = require("../models/pets");

module.exports = {
  getPets: async (req, res) => {
    //verified code works
    Pets.find({})
      .then((dbPets) => res.json(dbPets))
      .catch((err) => res.status(400).json(err));
  },
  getPetsByUser: async (req, res) => {
    //verified code works
    Pets.find({
      userID: req.params.id,
    })
      .then((dbPets) => res.json(dbPets))
      .catch((err) => res.status(400).json(err));
  },
  delPet: async (req, res) => {
    Pets.findById({ _id: req.params.id })
      .then((dbPets) => dbPets.remove())
      .then((dbPets) => res.json(dbPets))
      .catch((err) => res.status(422).json(err));
  },
  updatePet: async (req, res) => {
    Pets.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  getPetByID: async (req, res) => {
    Pets.findById(req.params.id)
      .then((dbPets) => res.json(dbPets))
      .catch((err) => res.status(422).json(err));
  },
  createPet: (req, res) => {
    Pets.create(req.body)
      .then((dbPets) => {
        res.json(dbPets);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};
