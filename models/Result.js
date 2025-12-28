const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  answers: [{
    questionIndex: Number,
    selectedAnswer: String,
    isCorrect: Boolean,
  }],
  score: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  timeTaken: Number, // in minutes
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Result', ResultSchema);