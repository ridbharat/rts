const Result = require('../models/Result');

exports.submitResult = async (req, res) => {
  try {
    const result = new Result(req.body);
    await result.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserResults = async (req, res) => {
  try {
    const results = await Result.find({ user: req.user.id }).populate('quiz');
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};