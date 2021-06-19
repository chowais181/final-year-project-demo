const multer = require("multer");
const router = require('express').Router();
const fs = require("fs");
const { promisify } = require("util");
const ClassMaterials = require("../models/classmaterial.model");
const pipeline = promisify(require("stream").pipeline);
const pathlib = require('path');
var upload = multer();


router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const {
      file,
      body: { name, classid, date, uploadedby }
    } = req;
    console.log(name);
    const fileName = name + Math.floor(Math.random() * 1000) +classid+ file.detectedFileExtension;
    const path = pathlib.join(__dirname, '../public/uploads/', fileName);
    await pipeline(
      file.stream,
      fs.createWriteStream(path)
    );
    console.log(fileName);
    console.log(path);
    const newMaterial = new ClassMaterials({
      classid: classid,
      filename: fileName,
      title: name,
      date: date,
      uploadedby: uploadedby,
    });
    newMaterial.save();
    res.status(200).send("File uploaded as " + fileName);


  } catch (err) {
    console.log("ERRRORRRRR")
    console.log(err);
  }
});


router.route('/download/:filen').get((req, res) => {
  const fileName = req.params.filen;
  const path = pathlib.join(__dirname, '../public/uploads/', fileName);
  res.download(path);
});

module.exports = router;

router.route('/').get((req, res) => {
  ClassMaterials.find()
    .then(classmaterials => {res.json(classmaterials);console.log(classmaterials)})
    .catch(err => res.status(400).json('Error: ' + err));
});