const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/paws', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('DATABASE Connected!');
});

const Paw = mongoose.model('paws', dogSchema);

module.exports = {
  db,
};
