const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

router.get('/celebrities', async (req, res) =>{
  try {
    const celebritiesFromDB = await Celebrity.find();
    res.render('celebrities/index', {celebrities: celebritiesFromDB});
  } catch (error) {
    res.render(error);
  }
});

router.get('/celebrities/new', (req, res) =>{
  try {
    res.render('celebrities/new')
  } catch (error) {
    res.render(error);
  }
});
router.post('/celebrities/new', async (req, res) =>{
  try {
    let {name, ocupation, catchPhrase} = req.body;
    const celebCreated = await Celebrity.create({name, ocupation, catchPhrase});
    res.redirect('/celebrities');
  } catch (error) {
    res.render(error);
  }
});

router.post('/celebrities/:id/delete', async (req, res) =>{
  try {
    let celebID = req.params.id;
    const celebDeleted = await Celebrity.findByIdAndDelete(celebID);
    res.redirect('/celebrities');
  } catch (error) {
    res.render('error')
  }
});

router.get('/celebrities/:id/edit', async (req, res) => {
  try {
    let celebID = req.params.id;
    const celebFoundById = await Celebrity.findById(celebID);
    res.render('celebrities/edit', {celebrity: celebFoundById});
  } catch (error) {
    res.render(error)
  }
});
router.post('/celebrities/:id/edit', async (req, res) =>{
  try {
    let celebID = req.params.id;
    let {name, ocupation, catchPhrase} = req.body;
    const celebUpdated = await Celebrity.findByIdAndUpdate(celebID, {name, ocupation, catchPhrase});
    res.redirect('/celebrities');
  } catch (error) {
    res.render(error);
  }
})


router.get('/celebrities/:id', async (req, res) =>{
  try {
    let celebID = req.params.id;
    const celebritiesFromDB = await Celebrity.find(); 
    const celebFoundById = await (await Celebrity.findById(celebID)).populate('celebrity');
    res.render('celebrities/show', {celebrities: celebritiesFromDB, celebrity: celebFoundById})
  } catch (error) {
    res.render(error);
  }
});




module.exports = router;