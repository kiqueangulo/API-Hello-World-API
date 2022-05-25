const express = require('express');
const languages = express.Router();
const Language = require('../models/language.js');
const seed = require('../models/language_seed.js');

languages.get('/seed', (req, res) => {
    Language.insertMany(seed)
        .then(createdLanguages => {
            res.json({ message: "Seed successful!" })
        })
});

languages.get('/', (req, res) => {
    Language.find()
        .then(foundLangueges => res.json(foundLangueges))
});

languages.get('/:name', (req, res) => {
    Language.findOne({ name: req.params.name .toLowerCase() })
        .then(foundLanguege => res.json(foundLanguege))
});

module.exports = languages;