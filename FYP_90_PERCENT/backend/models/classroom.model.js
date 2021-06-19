const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classroomSchema = new Schema({
  classid: { type: String, required: true },
  coursecode: { type: String, required: true },
  classname: { type: String, required: true },
  section: { type: String, required: true }
});

const Class = mongoose.model('Classroom', classroomSchema);

module.exports = Class;

