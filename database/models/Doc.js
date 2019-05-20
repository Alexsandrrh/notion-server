const mongoose = require('../index');

const Schema = mongoose.Schema;

const Paragraph = new Schema({
  type: {
    type: String,
    enum: ['text', 'header-1', 'header-2', 'header-3'],
    default: 'text'
  },
  content: []
});

const Action = new Schema({});

const Doc = new Schema({
  name: {
    type: String,
    required: false,
    default: 'Underfined'
  },
  icon: {
    key: String,
    emoji: String
  },
  paragraphs: [Paragraph],
  createAt: {
    type: Date,
    default: Date.now()
  },
  updateAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  actions: [Action]
});

module.exports = mongoose.model('Doc', Doc);
