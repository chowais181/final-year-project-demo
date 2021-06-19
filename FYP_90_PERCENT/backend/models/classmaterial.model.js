const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClassMaterial = new Schema({
  classid: { type: String, required: true },
  filename: { type: String, required: true },
  title: { type: String, required: true },
  date:{ type: String, required: true },
  uploadedby:{ type: String, required: true }
});

const ClassMaterials = mongoose.model('Class Material', ClassMaterial);

module.exports = ClassMaterials;
