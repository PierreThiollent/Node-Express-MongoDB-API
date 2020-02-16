// Import du module express
var express = require('express');

// Import du module body parser
const bodyParser = require('body-parser');

// Import du module Mongoose
const mongoose = require('mongoose');

var Thing = require('./models/Thing');

// Creation d'une app express
const app = express();

mongoose
  .connect('mongodb+srv://pierre_t76:pierre_t76@cluster0-bveai.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Middleware permettant de définir les headers et régler les soucis de CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Transforme le corps de toutes les requetes POST en JSON
app.use(bodyParser.json());

// Midlleware pour la méthode POST
app.post('/api/stuff', (req, res, next) => {
  delete req.body._id;
  // On instancie un nouvel objet du modele Thing
  const thing = new Thing({
    // On décompose le contenu du body de la requete
    ...req.body,
  });
  thing
    .save()
    .then(() => res.status(201).json({ message: 'Objet enregistré' }))
    .catch(error => res.status(400).json({ error }));
});

// Methode pour récupérer tous les produits en vente
app.get('/api/stuff', (req, res, next) => {
  // On appelle la méthode find pour récupérer tout les objets Thing en base
  Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
});

// Export de cette app
module.exports = app;
