const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  name: { type: String, require: false },
  companyName: { type: String, required: false },
  emailAddress: { type: String, required: true, unique: true },
  telephoneNumber: { type: String, required: false },
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);