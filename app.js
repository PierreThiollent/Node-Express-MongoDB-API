// Import du module express
var express = require('express');

// Import du module body parser
const bodyParser = require('body-parser');

// Import du module Mongoose
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');

// Creation d'une app express
const app = express();

mongoose
  .connect('mongodb+srv://pierre_t76:pierre_t76@cluster0-bveai.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.error('Connexion à MongoDB échouée !'));

// Middleware permettant de définir les headers et régler les soucis de CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Transforme le corps de toutes les requetes POST en JSON
app.use(bodyParser.json());

app.use('/api/stuff/', stuffRoutes);

// Export de cette app
module.exports = app;
