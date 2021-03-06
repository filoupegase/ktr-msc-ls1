const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  name: { type: String, required: false },
  username: { type: String, required: true, unique: false },
  companyName: { type: String, required: false },
  email: { type: String, required: true },
  phoneNumber: { type: Number, required: false }
});

module.exports = mongoose.model('Thing', thingSchema);