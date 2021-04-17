const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nuxtjs-nodejs', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
