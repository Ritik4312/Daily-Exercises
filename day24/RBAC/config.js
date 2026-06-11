const fs = require('fs');
const multer = require('multer');

const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, "Today" + '-' + file.originalname);
    }
});
const upload = multer({ storage });
module.exports = upload;