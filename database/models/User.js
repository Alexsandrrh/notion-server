const mongoose = require('../index');

const Schema = mongoose.Schema;

const User = new Schema({
  userName: String,
  photo: String,
  email: String,
  name: Object,
  googleId: String,
  docsList: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Doc'
    }
  ],
  lastDoc: Schema.Types.ObjectId
});

module.exports = mongoose.model('User', User);
