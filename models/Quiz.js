const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  questionEn: String,
  questionHi: String,
  optionsEn: [String],
  optionsHi: [String],
  correctAnswerEn: String,
  correctAnswerHi: String,
});

const QuizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  questions: [QuestionSchema],
  duration: Number, // in minutes
  totalQuestions: { type: Number, default: 40 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Quiz', QuizSchema);