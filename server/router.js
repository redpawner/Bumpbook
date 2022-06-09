const router = require('express').Router();
const { getUser, register, addApt, delApt, updDate } = require('./controllers');

router.post('/user', getUser);
router.post('/register', register);
router.post('/appointment', addApt);
router.post('/date', updDate);
router.delete('/appointment', delApt);

module.exports = router;
