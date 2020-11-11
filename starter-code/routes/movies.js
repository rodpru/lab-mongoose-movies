const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

router.get('/movies', async (req, res) =>{
  try {
    const moviesFromDB = await Movie.find();
    res.render('movies/index-movies', {movies: moviesFromDB});
  } catch (error) {
    res.render(error);
  }
});


module.exports = router;