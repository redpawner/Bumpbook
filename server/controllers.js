const User = require('./models/schema');

async function getUser(req, res) {
  try {
    const { email } = req.body;
    const response = await User.findOne({ email: email }, { __v: 0 });
    res.status(201).send(response);
  } catch (error) {
    console.log('error with getUser');
    res.sendStatus(500);
  }
}

async function register(req, res) {
  const user = await User.findOne({ email: req.body.email });
  if (user)
    return res
      .status(409)
      .send({ error: '409', message: 'User already exists' });
  try {
    const doc = new User({
      ...req.body,
    });
    await doc.save(function (err) {
      if (err) {
        res.sendStatus(400);
      } else {
        console.log('added successfully');
        res.sendStatus(201);
      }
    });
  } catch (error) {
    console.log('error with login');
    res.sendStatus(500);
  }
}

async function addApt(req, res) {
  try {
    const apt = { title: req.body.title, date: req.body.date };
    await User.findOneAndUpdate(
      { _id: req.body.id },
      {
        $push: { appointments: apt },
      },
      { upsert: true }
    );
    res.status(200).send('added');
  } catch (error) {
    console.log('error with addApt');
    res.sendStatus(500);
  }
}

async function delApt(req, res) {
  try {
    const apt = { title: req.body.title, date: req.body.date };
    await User.findOneAndUpdate(
      { _id: req.body.id },
      {
        $pull: { appointments: apt },
      }
    ),
      res.status(200).send('deleted');
  } catch (error) {
    console.log('error with delApt');
    res.sendStatus(500);
  }
}

module.exports = { getUser, register, addApt, delApt };
