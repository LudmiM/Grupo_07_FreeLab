// upload.js
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/images/users/'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_avatar_${file.originalname}${path.extname(file.originalname)}`); 
  }
});

const uploadAvatar = multer({
  storage
});

module.exports = uploadAvatar;
