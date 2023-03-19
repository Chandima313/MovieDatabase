const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String,
     required: true },

  director: { type: mongoose.Schema.Types.ObjectId,
     ref: 'Director', 
     required: true },

  year: { type: Number,
     required: true },

  genre: [{ type: mongoose.Schema.Types.ObjectId,
     ref: 'Genre', 
     required: true }],

  actors: [{ type: mongoose.Schema.Types.ObjectId,
     ref: 'Actor',
      required: true }],
});

module.exports = mongoose.model('Movie', movieSchema);