const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const assesmentSchema = new Schema({
    classid: { type: String, required: true },
    title: { type: String, required: true },
    startdate: { type: String, required: true },
    enddate: { type: String, required: true },
    questions: [],
    objective:{ type: Boolean, required: true },
    createdby: { type: String, required: true },
    assesmenttype:{ type: String, required: true },
});

const Assesment = mongoose.model('Assesment', assesmentSchema);

module.exports = Assesment;
