const mongoose = require('mongoose');
const { mongodb } = require('../config');

mongoose.Promise = global.Promise;

mongoose.connect(mongodb);

module.exports = mongoose;
