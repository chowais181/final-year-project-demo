const router = require('express').Router();
let Student = require('../models/student.model');
let Participant = require('../models/participant.model');

router.route('/').get((req, res) => {
  Student.find()
    .then(students => res.json(students))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/userbyclass').post((req, res) => {
  console.log(req.body);
  let studentdata;
  Student.find()
    .then(students => {
      studentdata = students.map((r) => r.toObject());;
      Participant.find({ classroomid: req.body.classid })
        .then((cms) => {
          cms.map((r) => {
            const index = studentdata.findIndex(i => i.rollno === r.userid);
            
            if (index > -1) {
              studentdata.splice(index, 1);
            }
          });

          res.json(studentdata);
        })
        .catch(err => res.status(400).json('Error: ' + err));

    })
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const rollno = req.body.rollno;
  const email = req.body.email;
  const password = req.body.password;

  const newStudent = new Student({
    firstname,
    lastname,
    rollno,
    email,
    password,
  });

  newStudent.save()
    .then(() => res.json('Student added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Student.findById(req.params.id)
    .then(student => res.json(student))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then(() => res.json('Student deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Student.findById(req.params.id)
    .then(student => {
      student.firstname = req.body.firstname;
      student.lastname = req.body.lastname;
      student.rollno = req.body.rollno;
      student.email = req.body.email;
      student.password = req.body.password;

      student.save()
        .then(() => res.json('Student updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;