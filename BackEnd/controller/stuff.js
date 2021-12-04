const Thing = require('../Models/Things');

exports.getAllStuff = (req, res, next) => {
  let query = { username: req.body.username };
  Thing.find(query).clone().then((result) => {
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
        res.status(200).json({
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

