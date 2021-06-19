const router = require('express').Router();
let classroom= require('../models/classroom.model');

router.route('/').get((req, res) => {
    classroom.find()
      .then(classrooms => res.json(classrooms))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/details').post((req, res) => {
    classroom.findOne({classid:req.body.classid})
      .then(classrooms => res.json(classrooms))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  // router.route('/section').get((req, res) => {
  //   classroom.find({section:req.body.section})
  //     .then(classrooms => res.json(classrooms))
  //     .catch(err => res.status(400).json('Error: ' + err));
  // });

  /*router.route('/batch').get((req, res) => {
    classroom.find({section:str.concat(req.body.section,'/')})
      .then(classrooms => res.json(classrooms))
      .catch(err => res.status(400).json('Error: ' + err));
  });*/


router.route('/add').post((req, res) => {
  const classid = req.body.classid;
  const coursecode = req.body.coursecode;
  const classname = req.body.classname;
  const section = req.body.section;

  const newclassroom= new classroom({
    classid,
    coursecode,
    classname,
    section
  });

  newclassroom.save()
  .then(() => res.json('Classroom added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  classroom.findById(req.params.id)
    .then(classroom=> res.json(classroom))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  classroom.findByIdAndDelete(req.params.id)
    .then(() => res.json('Classroom deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/update/:id').post((req, res) => {
  classroom.findById(req.params.id)
    .then(course => {
      classroom.classid = req.body.classid;
      classroom.coursecode = req.body.coursecode;
      classroom.classname = req.body.classname;
      classroom.section = req.body.section;


      classroom.save()
        .then(() => res.json('Classroom updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;