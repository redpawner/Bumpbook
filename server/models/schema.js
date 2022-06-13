const mongoose = require('mongoose');
const { Schema } = mongoose;
const conn = require('./db');

const Pics = new Schema({ url: String, date: Date }, { timestamps: true });
const Apts = new Schema({ title: String, date: Date }, { _id: false });
const Name = new Schema({ name: String, sex: String }, { _id: false });
const User = new Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  dueDate: { type: Date },
  favNames: [Name],
  appointments: [Apts],
  pictures: [Pics],
});

const Users = conn.model('Users', User);

module.exports = Users;
