const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  name: { type: String, required: false },
  companyName: { type: String, required: false },
  emailAddress: { type: String, required: true },
  phoneNumber: { type: Number, required: false }
});

module.exports = mongoose.model('Thing', thingSchema);