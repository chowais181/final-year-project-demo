const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const participantSchema = new Schema({
  userid: { type: String, required: true },
  classroomid: { type: String, required: true },
  designation: { type: String, required: true }
});

const Class = mongoose.model('Participant', participantSchema);

module.exports = Class;