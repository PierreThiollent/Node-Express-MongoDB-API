const User = require('../models/Users');
const bcrypt = require('bcrypt');

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: 'Utilisatuer créé' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      !user
        ? res.status(401).json({ error: 'Utilisateur non trouvé' })
        : bcrypt
            .compare(req.body.password, user.password)
            .then(valid => {
              !valid
                ? res.status(401).json({ error: 'Mot de passe incorrect' })
                : res.status(200).json({
                    userId: user._id,
                    token: 'TOKEN',
                  });
            })
            .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};
