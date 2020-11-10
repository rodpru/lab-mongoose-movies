const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const DB_NAME = ('mongoose-movies');
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
  {
    name: 'Songoku',
    ocupation: 'Postman',
    catchPhrase: 'YYYYYEEEEEEEEE',
  },
  {
    name: 'SpiderMan',
    ocupation: 'Electrician',
    catchPhrase: 'YOYOYOYO',
  },
  {
    name: 'Batman',
    ocupation: 'Programmer',
    catchPhrase: 'AHHAHAHAHAHAHAHAHA',
  }];

Celebrity.create(celebrities).then((celebsCreated) =>{
  console.log(`Created ${celebsCreated.length} celebs`);
  mongoose.connection.close();
}).catch((error) =>{
  console.log(error);
});
