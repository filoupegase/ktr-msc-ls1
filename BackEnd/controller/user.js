const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');


/*exports.getUser = (req, res, next) => {

};*/
// Bonus 3 ;)
exports.signup = (req, res, next) => {
  const request = (password) => {
    const user = new User({
      username: req.body.username,
      companyName: req.body.companyName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: password
    });
    user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé avec Succes' }))
        .catch(error => res.status(400).json({ error }));
  };
  const password = req.body.password !== '' ? bcrypt.hash(req.body.password, 10).then((hash) => {
    request(hash);
  }) : request('');
};

exports.login = (req, res, next) => {
  User.findOne({ username: req.body.username })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        res.status(200).json({ user: user });
      })
      .catch(error => res.status(500).json({ error }));
};