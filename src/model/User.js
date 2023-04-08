/**
 * @description User model
 * @author 李伟杰
 */

const mongoose = require('../db/db')

const Schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true })

const User = mongoose.model('user', Schema)

module.exports = {
  User
}