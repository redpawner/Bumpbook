const User = require('./models/schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY || 'th1515n0tv3rys3cur3';
const XK = process.env.XK;
const XH = process.env.XH;
const fetcher = require('node-fetch');

const generateAccessToken = (id) => {
  return jwt.sign(id, SECRET_KEY, { expiresIn: '1800s' });
};

const getUser = async (req, res) => {
  try {
    const id = req.user.id;
    const response = await User.findOne({ _id: id }, { __v: 0 });

    res.status(201).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'error' });
  }
};

const register = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user)
    return res
      .status(409)
      .send({ error: '409', message: 'User already exists' });
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const doc = new User({
      ...req.body,
      password: hash,
    });
    const { _id } = await doc.save();
    const accessToken = generateAccessToken({ _id });
    res.status(201).send({ accessToken });
  } catch (error) {
    res.status(400).send({ error, message: 'unable to register' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    const validatedPass = await bcrypt.compare(password, user.password);
    if (!validatedPass) throw new Error();
    const accessToken = generateAccessToken({ _id: user._id });
    res.status(200).send({ accessToken });
  } catch (error) {
    res
      .status(401)
      .send({ error: '401', message: 'Username or password is incorrect' });
  }
};

const updDate = async (req, res) => {
  try {
    await User.findOneAndUpdate(
      { _id: req.user.id },
      { dueDate: req.body.date },
      { upsert: true }
    );
    res.status(200).send({ message: 'due date added' });
  } catch (error) {
    console.log('error with updDate');
    res.status(500).send({ error: 'error' });
  }
};

const addApt = async (req, res) => {
  try {
    const apt = { title: req.body.title, date: req.body.date };
    await User.findOneAndUpdate(
      { _id: req.user.id },
      {
        $push: { appointments: apt },
      },
      { upsert: true }
    );
    res.status(200).send({ message: 'added' });
  } catch (error) {
    console.log('error with addApt');
    res.status(500).send({ error: 'error' });
  }
};

const delApt = async (req, res) => {
  console.log(XH);
  try {
    const apt = { title: req.body.title, date: req.body.date };
    await User.findOneAndUpdate(
      { _id: req.user.id },
      {
        $pull: { appointments: apt },
      }
    ),
      res.status(200).send({ message: 'deleted' });
  } catch (error) {
    console.log('error with delApt');
    res.status(500).send({ error: 'error' });
  }
};

const uploadImage = async (req, res) => {
  try {
    const pic = { url: req.file.path, date: req.body.date };
    await User.findOneAndUpdate(
      { _id: req.user.id },
      {
        $push: { pictures: pic },
      },
      { upsert: true }
    );
    res.status(200).send(pic);
  } catch (error) {
    res.status(500).send({ error: 'error' });
  }
};

const getPictures = async (req, res) => {
  try {
    const url = '/' + req.body.url;
    res.sendFile(url, { root: __dirname });
  } catch (error) {
    console.log('error with getUser');
    res.status(500).send({ error: 'error' });
  }
};

const addName = async (req, res) => {
  try {
    const fav = { name: req.body.name, sex: req.body.sex };
    await User.findOneAndUpdate(
      { _id: req.user.id },
      {
        $push: { favNames: fav },
      },
      { upsert: true }
    );
    res.status(200).send({ message: 'favourited' });
  } catch (error) {
    console.log('error with addName');
    res.status(500).send({ error: 'error' });
  }
};

const delName = async (req, res) => {
  try {
    const fav = { name: req.body.name, sex: req.body.sex };
    await User.findOneAndUpdate(
      { _id: req.user.id },
      {
        $pull: { favNames: fav },
      }
    ),
      res.status(200).send({ message: 'deleted' });
  } catch (error) {
    console.log('error with delName');
    res.status(500).send({ error: 'error' });
  }
};

const genName = async (req, res) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': XK,
        'X-RapidAPI-Host': XH,
      },
    };
    const url =
      'https://baby-random-first-name.p.rapidapi.com/random_' +
      req.body.sex +
      '?origin=American';
    const response = await fetcher(url, options);
    const data = await response.text();
    res.status(200).send({ name: data });
  } catch (error) {
    console.log('error with genName');
    res.status(500).send({ error: 'error' });
  }
};

module.exports = {
  addName,
  delName,
  genName,
  getUser,
  register,
  addApt,
  delApt,
  updDate,
  login,
  uploadImage,
  getPictures,
};
