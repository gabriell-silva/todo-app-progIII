const mongoose = require('mongoose');

const MONGO = process.env.MONGO_URI || 'mongodb://localhost/test';

mongoose.connect(MONGO, {
  useNewUrlParser: true,
});