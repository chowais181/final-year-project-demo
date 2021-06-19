const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  userid: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  qualification: { type: String, required: true },
  department: { type: String, required: true },
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;