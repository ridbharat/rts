const express = require('express');
const router = express.Router();
const { getCategories, createCategory } = require('../controllers/categoryController');
const auth = require('../middleware/auth');

router.get('/', getCategories);
router.post('/', auth, createCategory);

module.exports = router;