const express = require('express');
const stuffController = require('../controllers/stuff');

// On crée un router
const router = express.Router();

// Midlleware pour la méthode POST
router.post('/', stuffController.createThing);

router.get('/:id', stuffController.getThing);

router.put('/:id', stuffController.modifyThing);

router.delete('/:id', stuffController.deleteThing);

// Methode pour récupérer tous les produits en vente
router.get('/', stuffController.getAllThings);

module.exports = router;
