const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  name: String,
  email: String,
  phone: String,
  address: String,
  status: {
    type: Boolean,
    default: false
  },
  trash: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: Date
});

// tạo collection
module.exports = mongoose.model('user', user_schema);