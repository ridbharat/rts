const express = require('express');
const router = express.Router();
const { getQuizzes, getQuiz, createQuiz } = require('../controllers/quizController');
const auth = require('../middleware/auth');

router.get('/', getQuizzes);
router.get('/:id', getQuiz);
router.post('/', auth, createQuiz);

module.exports = router;