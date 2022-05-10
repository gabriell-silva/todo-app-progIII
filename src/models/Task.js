const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  description: {
    type: String,
    trim: true,
    required: [true, 'Description is required'],
  },
  completed: {
    type: Boolean,
    required: false,
    default: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Task must belongs to an User'],
    ref: 'User',
  }
})

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;