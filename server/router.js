const router = require('express').Router();
const { getUser, register } = require('./controllers');

router.post('/user', getUser);
router.post('/register', register);

module.exports = router;
