let mongoose = require('mongoose');

let memberSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, 'default': Date.now }
});

var Member = mongoose.model('Member', memberSchema);

module.exports = Member;
