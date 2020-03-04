const express = require('express');
const stuffController = require('../controllers/stuff');
const auth = require('../controllers/auth');

// On crée un router
const router = express.Router();

// Midlleware pour la méthode POST
router.post('/', auth, stuffController.createThing);
// Get by id
router.get('/:id', auth, stuffController.getThing);
// Modify by id
router.put('/:id', auth, stuffController.modifyThing);
// Delete by id
router.delete('/:id', auth, stuffController.deleteThing);
// Methode pour récupérer tous les produits en vente
router.get('/', auth, stuffController.getAllThings);

module.exports = router;
