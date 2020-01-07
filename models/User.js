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
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  confirm_email: {
    type: String

  },
  address: {
    type: String

  },
  gender: {
    type: String

  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);