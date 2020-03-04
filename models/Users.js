const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

// Schéma de données
// => ID généré automatiquement
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

// On exporte le schéma en tant que modèle
module.exports = mongoose.model('User', userSchema);
