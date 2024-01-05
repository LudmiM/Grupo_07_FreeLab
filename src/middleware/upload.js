// upload.js
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/images/productos/'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_products_${file.originalname}${path.extname(file.originalname)}`); // Utiliza el nombre original del archivo
  }
});

const upload = multer({
  storage,
  limits: { files: 5 } // Limita a 5 archivos por solicitud
});

module.exports = upload;
