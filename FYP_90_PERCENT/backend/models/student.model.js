const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  rollno: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;