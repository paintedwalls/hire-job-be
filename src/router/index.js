const express = require('express');

const router = express.Router();

const registerPekerja = require('./registerPekerja');
const registerPerekrut = require('./registerPerekrut');
const loginPekerja = require('./loginPekerja');
const loginPerekrut = require('./loginPerekrut');
const usersPerekrut = require('./usersPerekrut');
const usersPekerja = require('./usersPekerja');
const skillPekerja = require('./skillPekerja');
const chat = require('./chat');

router.use('/register', registerPekerja);
router.use('/register', registerPerekrut);
router.use('/login', loginPekerja);
router.use('/login', loginPerekrut);
router.use('/users', usersPekerja);
router.use('/users', usersPerekrut);
router.use('/skill', skillPekerja);
router.use('/chat', chat);

module.exports = router;
