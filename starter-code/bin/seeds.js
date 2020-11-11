const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');
const DB_NAME = ('mongoose-movies');
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// const celebrities = [
//   {
//     name: 'Songoku',
//     ocupation: 'Postman',
//     catchPhrase: 'YYYYYEEEEEEEEE',
//   },
//   {
//     name: 'SpiderMan',
//     ocupation: 'Electrician',
//     catchPhrase: 'YOYOYOYO',
//   },
//   {
//     name: 'Batman',
//     ocupation: 'Programmer',
//     catchPhrase: 'AHHAHAHAHAHAHAHAHA',
//   }];

// Celebrity.create(celebrities).then((celebsCreated) =>{
//   console.log(`Created ${celebsCreated.length} celebs`);
//   mongoose.connection.close();
// }).catch((error) =>{
//   console.log(error);
// });

const movies = [
  {
    title: 'Dragon Ball',
    genre: 'action',
    plot: 'The return',
  },
  {
    title: 'SpiderMan - The Movie',
    genre: 'action',
    plot: 'II',
  },
  {
    title: 'The Batman',
    genre: 'action',
    plot: 'IX',
  },
];

Movie.create(movies).then((movieCreated) =>{
  console.log('The movies were create');
  mongoose.connection.close();
}).catch((error) => {
  console.log(error);
});