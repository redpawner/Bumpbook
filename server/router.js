const router = require('express').Router();
const authMiddleware = require('./middleware/auth');
const {
  getUser,
  register,
  addApt,
  delApt,
  updDate,
  login,
} = require('./controllers');

router.get('/user', authMiddleware, getUser);
router.post('/register', register);
router.post('/login', login);
router.post('/appointment', authMiddleware, addApt);
router.post('/date', authMiddleware, updDate);
router.delete('/appointment', authMiddleware, delApt);

module.exports = router;
