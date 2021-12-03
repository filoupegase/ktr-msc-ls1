const Thing = require('../Models/Things');


exports.createThing = (req, res, next) => {
  const thing = new Thing({
    name: req.body.name,
    companyName: req.body.companyName,
    emailAddress: req.body.emailAddress,
    phoneNumber: req.body.phoneNumber
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

