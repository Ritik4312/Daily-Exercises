const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize')
const upload = require('../config');

router.get('/all', auth, authorize('Admin'), (req, res) => {
    res.json({ message: `Welcome ${req.user.role}, this is the admin-only page.` });
});

router.get('/profile', auth, authorize('Admin','User'), (req, res) => {
    res.json({ message: `Welcome ${req.user.role}, this is your profile.` });
});

router.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded.' });
    }
    res.json(req.file);
});

module.exports = router;