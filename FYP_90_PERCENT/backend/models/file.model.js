const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fileSchema = new Schema({
  classid: { type: String, required: true },
  resourcetype: { type: String, required: true },
  filename: { type: String, required: true },
  filepath: { type: String, required: true },
});

const Class = mongoose.model('Files', fileSchema);

module.exports = Class;
