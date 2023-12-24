const express = require('express');
const router = express.Router();
const { userController } = require('../controllers/index.js')

router.get('/list', userController.index);
router.get('/detail', userController.view);

module.exports = router;