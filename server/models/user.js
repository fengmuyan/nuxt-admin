import mongoose from 'mongoose'
const Schema = mongoose.Schema
const User = new Schema({
  username: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
})

export default mongoose.model('User', User)