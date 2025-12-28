const express = require('express');
const router = express.Router();
const { submitResult, getUserResults } = require('../controllers/resultController');
const auth = require('../middleware/auth');

router.post('/', auth, submitResult);
router.get('/my', auth, getUserResults);

module.exports = router;