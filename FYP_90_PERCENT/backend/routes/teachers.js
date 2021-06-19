const router = require('express').Router();
let Teacher = require('../models/teacher.model');
let Participant = require('../models/participant.model');

router.route('/').get((req, res) => {
  Teacher.find()
    .then(teachers => res.json(teachers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const userid=req.body.userid;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const qualification = req.body.qualification;
  const department = req.body.department;
  
  const newTeacher = new Teacher({
    userid,
    firstname,
    lastname,
    email,
    qualification,
    department,
  });

  newTeacher.save()
  .then(() => res.json('Teacher added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/userbyclass').post((req, res) => {
  console.log(req.body);
  let teacherdata;
  Teacher.find()
    .then(teachers => {
      teacherdata = teachers.map((r) => r.toObject());;
      Participant.find({ classroomid: req.body.classid })
        .then((cms) => {
          cms.map((r) => {
            const index = teacherdata.findIndex(i => i.userid === r.userid);
            
            if (index > -1) {
              teacherdata.splice(index, 1);
            }
          });

          res.json(teacherdata);
        })
        .catch(err => res.status(400).json('Error: ' + err));

    })
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').get((req, res) => {
  Teacher.findById(req.params.id)
    .then(teacher => res.json(teacher))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Teacher.findByIdAndDelete(req.params.id)
    .then(() => res.json('Teacher deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Teacher.findById(req.params.id)
    .then(teacher => {
      teacher.firstname = req.body.firstname;
      teacher.lastname = req.body.lastname;
      teacher.email = req.body.email;
      teacher.qualification = req.body.qualification;
      teacher.department = req.body.department;
      teacher.password = req.body.password;

      teacher.save()
        .then(() => res.json('Teacher updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;