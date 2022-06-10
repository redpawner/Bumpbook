const jwt = require('jsonwebtoken');
const User = require('../models/schema');
const SECRET_KEY = process.env.SECRET_KEY || 'th1515n0tv3rys3cur3';

const authMiddleware = async (req, res, next) => {
  const authHeaders = req.headers['authorization'];
  if (!authHeaders) return res.status(403).send({ error: 'forbidden' });
  const token = authHeaders.split(' ')[1];

  try {
    const { _id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findOne({ _id });
    if (!user) return res.status(401).send({ error: 'unauthorized' });
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: 'unauthorized' });
  }
};

module.exports = authMiddleware;
