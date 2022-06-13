const router = require('express').Router();
const authMiddleware = require('./middleware/auth');
const express = require('express');
const upload = require('./middleware/multer');
const {
  getUser,
  register,
  addApt,
  delApt,
  addName,
  delName,
  updDate,
  login,
  uploadImage,
  getPictures,
} = require('./controllers');

router.get('/user', authMiddleware, getUser);
router.post('/register', register);
router.post('/login', login);
router.post('/appointment', authMiddleware, addApt);
router.delete('/appointment', authMiddleware, delApt);
router.post('/name', authMiddleware, addName);
router.delete('/name', authMiddleware, delName);
router.post('/date', authMiddleware, updDate);
router.post(
  '/pictures',
  authMiddleware,
  upload.single('bumpImage'),
  uploadImage
);
router.post('/getpictures', authMiddleware, getPictures);

module.exports = router;
