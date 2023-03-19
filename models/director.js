const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: String,
  dob: Date,
});

module.exports = mongoose.model('Director', directorSchema);
