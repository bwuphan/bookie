const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name     : { type: String, required: true },
  nickname : { type: String, required: true },
  picture  : { type: String, required: true },
  user_id  : { type: String, required: true },

});

module.exports = mongoose.model('User', UserSchema);
