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
        res.status(400).send({ error: 'registration failed' });
      } else {
        console.log('added successfully');
        res.status(201).send({ message: 'registered' });
      }
    });
  } catch (error) {
    console.log('error with login');
    res.sendStatus(500); //TODO: add object
  }
}

async function updDate(req, res) {
  try {
    console.log(req.body.date);
    await User.findOneAndUpdate(
      { _id: req.body.id },
      { dueDate: req.body.date },
      { upsert: true }
    );
    res.status(200).send({ message: 'due date added' });
  } catch (error) {
    console.log('error with updDate');
    res.status(500).send({ error: 'error with due date' });
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
    res.status(200).send({ message: 'added' });
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
      res.status(200).send({ message: 'deleted' });
  } catch (error) {
    console.log('error with delApt');
    res.status(500).send({ error: 'error' });
  }
}

module.exports = { getUser, register, addApt, delApt, updDate };
