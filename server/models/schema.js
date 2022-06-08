const mongoose = require('mongoose');
const { Schema } = mongoose;
const conn = require('./db');

const Pics = new Schema({ url: String, date: Date }, { timestamps: true });
const User = new Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  dueDate: { type: Date },
  favNames: [{ name: String, gender: String }],
  appointments: [{ title: String, date: Date }],
  pictures: [Pics],
});

const Users = conn.model('Users', User);

module.exports = Users;
