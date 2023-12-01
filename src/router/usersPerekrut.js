const express = require('express');
const { getDetailPerekrutById, putPerekrutById } = require('../controllers/usersPerekrut');
const verifyToken = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.get('/perekrut/:id', verifyToken, getDetailPerekrutById);
router.put('/perekrut/:id', verifyToken, upload.single('photo'), putPerekrutById);

module.exports = router;
