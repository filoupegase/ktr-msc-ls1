const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  companyName: { type: String, required: false },
  email: { type: String, required: false },
  password: { type: String, required: false },
  phoneNumber: { type: Number, required: false }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);