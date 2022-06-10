const router = require('express').Router();
const authMiddleware = require('./middleware/auth');
const upload = require('./middleware/multer');
const {
  getUser,
  register,
  addApt,
  delApt,
  updDate,
  login,
  uploadImage,
  // getPictures,
} = require('./controllers');

router.get('/user', authMiddleware, getUser);
router.post('/register', register);
router.post('/login', login);
router.post('/appointment', authMiddleware, addApt);
router.post('/date', authMiddleware, updDate);
router.delete('/appointment', authMiddleware, delApt);
router.post(
  '/pictures',
  authMiddleware,
  upload.single('bumpImage'),
  uploadImage
);
// router.get('/pictures', authMiddleware, getPictures);

module.exports = router;
