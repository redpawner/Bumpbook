const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const id = req.user.id;
    const path = `bumpImage/${id}`;
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
    return cb(null, path);
  },
  filename: function (req, file, cb) {
    cb(null, new Date(req.body.date).toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'
    ? cb(null, true)
    : cb(null, false);
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter,
});

module.exports = upload;
