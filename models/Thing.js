const mongoose = require('mongoose');

// Schéma de données
// => ID généré automatiquement
const thingSchema = {
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
};

// On exporte le schéma en tant que modèle
module.exports = mongoose.model('Thing', thingSchema);
