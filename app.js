// Import du module express
var express = require('express');

// Creation d'une app express
const app = express();

app.use((req, res) => {
  res.json({ message: 'Votre requete a bien été reçue' });
});

// Export de cette app
module.exports = app;
