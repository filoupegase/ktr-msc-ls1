const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');

// Bonus 3 ;)
exports.signup = (req, res, next) => {
  if (req.body.password === '') {
    const user = new User({
      username: req.body.username,
      companyName: req.body.companyName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password
    });
    user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé avec Succes' }))
        .catch(error => res.status(400).json({ error }));
  }
  bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          username: req.body.username,
          companyName: req.body.companyName,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          password: hash
        });
        user.save()
            .then(() => res.status(201).json({ message: 'Utilisateur créé avec Succes' }))
            .catch(error => res.status(400).json({ error }));
      }).catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ username: req.body.username })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(user.username)
            .then(valid => {
              if (!valid) {
                return res.status(401).json({ error: 'Mot de passe incorrect !' });
              }
              res.status(200).json({
                userId: user._id, token: jwt.sign(
                    { userId: user._id },
                    'SECRET_TOKEN',
                    { expiresIn: '24h' })
              });
            })
            .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};