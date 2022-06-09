const router = require('express').Router();
const { getUser, register, addApt, delApt } = require('./controllers');

router.post('/user', getUser);
router.post('/register', register);
router.post('/appointment', addApt);
router.delete('/appointment', delApt);

module.exports = router;
