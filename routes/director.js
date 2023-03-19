const express = require('express');
const router = express.Router();
const director = require('../models/Director');

// GET all directors
router.get('/', async (req, res) => {
  try {
    const directors = await director.find();
    res.json(directors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one director
router.get('/:id', getDirector, (req, res) => {
  res.json(res.director);
});

// POST a new director
router.post('/', async (req, res) => {
  const director = new director({
    name: req.body.name,
    bio: req.body.bio,
    dob: req.body.dob,
  });
  try {
    const newDirector = await director.save();
    res.status(201).json(newDirector);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH (update) a director
router.patch('/:id', getDirector, async (req, res) => {
  if (req.body.name != null) {
    res.director.name = req.body.name;
  }
  if (req.body.bio != null) {
    res.director.bio = req.body.bio;
  }
  if (req.body.dob != null) {
    res.director.dob = req.body.dob;
  }
  try {
    const updatedDirector = await res.director.save();
    res.json(updatedDirector);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a director
router.delete('/:id', getDirector, async (req, res) => {
  try {
    await res.director.remove();
    res.json({ message: 'Director deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;