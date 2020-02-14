// Import du module express
var express = require('express');

// Import du module body parser
const bodyParser = require('body-parser');

// Creation d'une app express
const app = express();

// Middleware permettant de définir les headers et régler les soucis de CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Transforme le corps de toutes les requetes POST en JSON
app.use(bodyParser.json());

// On définit une nouvelle route
app.use('/api/stuff', (req, res, next) => {
  // On définit les données a retourner
  const stuff = [
    {
      _id: 'oeihfzeoi',
      title: 'Mon premier objet',
      description: 'Les infos de mon premier objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 2900,
      userId: 'qsomihvqios',
    },
  ];

  // On set le status de la reponse et le contenu (JSON)
  res.status(200).json(stuff);
});

// Export de cette app
module.exports = app;
