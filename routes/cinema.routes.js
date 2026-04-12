const express = require('express');
const Cinema = require('../models/Cinema');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const cinemas = await Cinema.find().populate('movies');
    return res.status(200).json(cinemas);
  } catch (error) {
    return next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newCinema = new Cinema(req.body);
    const createdCinema = await newCinema.save();
    return res.status(201).json(createdCinema);
  } catch (error) {
    return next(error);
  }
});

router.put('/add-movie', async (req, res, next) => {
  try {
    const { cinemaId, movieId } = req.body;
    const updatedCinema = await Cinema.findByIdAndUpdate(
      cinemaId,
      { $push: { movies: movieId } }, 
      { new: true }
    );
    return res.status(200).json(updatedCinema);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;