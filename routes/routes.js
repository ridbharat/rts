const express = require('express');
const router = express.Router();

const categoryRoutes = require('./categoryRoutes');
const quizRoutes = require('./quizRoutes');
const userRoutes = require('./userRoutes');
const resultRoutes = require('./resultRoutes');

router.use('/api/categories', categoryRoutes);
router.use('/api/quizzes', quizRoutes);
router.use('/api/auth', userRoutes);
router.use('/api/results', resultRoutes);

module.exports = router;