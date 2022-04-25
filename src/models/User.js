const mongoose = require('mongoose');
const { isEmail } = require('validator');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'Email is required'],
    validate: (value) => {
      if (!isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },
  age: {
    type: Number,
    validate: (value) => {
      if (value < 0) {
        throw new Error('Age must be a positive number');
      }
    }
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must have at least 6 characters'],
    trim: true,
    validate: (value) => {
      if (value.toLowerCase() === 'password') {
        throw new Error('You cannot use "password" as password');
      }
    }
  }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;