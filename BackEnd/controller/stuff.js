const Thing = require('../Models/Things');

exports.getAllStuff = (req, res, next) => {
  Thing.find((el, el2) => {
    return el2.username === req.body.username;
  }).clone().then((result) => {
    res.status(200).json(result);
  });
};

exports.createThing = (req, res, next) => {
  const thing = new Thing({
    name: req.body.name,
    companyName: req.body.companyName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    username: req.body.username
  });
  thing.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
  ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
  );
};

