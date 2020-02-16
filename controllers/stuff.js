var Thing = require('../models/Thing');

exports.createThing = (req, res, next) => {
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
};

exports.getThing = (req, res, next) => {
  Thing.findById(req.params.id)
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(400).json({ error }));
};

exports.modifyThing = (req, res, next) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié' }))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteOThing = (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé' }))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllThings = (req, res, next) => {
  // On routerelle la méthode find pour récupérer tout les objets Thing en base
  Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
};
