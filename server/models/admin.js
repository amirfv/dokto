const { Schema, model } = require('mongoose')
const { ObjectId } = Schema

const adminSchema = new Schema({
  _id: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  firstName: {
    type: String,
    required: true,
    length: 20
  },
  lastName: {
    type: String,
    required: true,
    length: 20
  },
  email: {
    type: String,
    required: true,
    length: 20
  },
  phone: {
    type: String,
    length: 12
  },
  role: {
    type: String,
    default: 'admin',
    required: true
  },
  dob: {
    type: Date
  },
  image: {
    type: String
  }
}, { timestamps: true })

const Admin = model('admin', adminSchema)
module.exports = Admin