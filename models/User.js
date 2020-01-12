const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String
  },
  phone_no: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  confirm_email: {
    type: String,
    required: true
  },
  address: {
    type: String

  },
  gender: {
    type: String,
    required: true
  },
  text_area: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);