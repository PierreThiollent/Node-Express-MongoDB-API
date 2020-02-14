// Import du module express
var express = require('express');

// Creation d'une app express
const app = express();

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
