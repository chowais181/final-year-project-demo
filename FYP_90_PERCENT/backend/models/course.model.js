const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  coursecode: { type: String, required: true },
  coursename: { type: String, required: true }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;