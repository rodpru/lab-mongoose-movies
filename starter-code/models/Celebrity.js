const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const celebritySchema = Schema ({
  name: String,
  ocupation: String,
  catchPhrase: String
});

module.exports = model('Celebrity', celebritySchema);