const router = require('express').Router();
let Participant = require('../models/participant.model');
let Classroom = require('../models/classroom.model');
let Student = require('../models/student.model');
let Teacher = require('../models/teacher.model');
const Class = require('../models/participant.model');
router.route('/').get((req, res) => {
  Participant.find()
    .then(participants => res.json(participants))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getclassroomsstudent').post((req, res) => {
  var classrooms = [];
  Participant.find({ userid: req.body.userid, designation: 'student' })
    .then((cms) => {

      Promise.all(cms.map(classroom => {
        return Classroom.findOne({ classid: classroom.classroomid }).exec().catch(err => {
          res.json("Not Found");
        });
      })).then(classrooms => {
        classrooms = classrooms.filter(classroom => classroom !== null);
        res.json(classrooms);
      }).catch(err => {
        // handle error here
      })

    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getclassrooms').post((req, res) => {
  var classrooms = [];
  Participant.find({ userid: req.body.userid, designation: 'teacher' })
    .then((cms) => {

      Promise.all(cms.map(classroom => {
        return Classroom.findOne({ classid: classroom.classroomid }).exec().catch(err => {
          res.json("Not Found");
        });
      })).then(classrooms => {
        classrooms = classrooms.filter(classroom => classroom !== null);
        res.json(classrooms);
      }).catch(err => {
        // handle error here
      })

    })
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/getstudents').post((req, res) => {
  var users = [];
  console.log("new walla");
  console.log(req.body.classid);
  Participant.find({ classroomid: req.body.classid })
    .then((cms) => {

      Promise.all(cms.map(users => {
        return Student.findOne({ rollno: users.userid }).exec().catch(err => {
          res.json("Not Found");
        });
      })).then(users => {
        users = users.filter(users => users !== null);
        console.log(users);
        res.json(users);
      }).catch(err => {
        // handle error here
      })

    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getteachers').post((req, res) => {
  var users = [];
  console.log("Request is " + req.body.classid);
  Participant.find({ classroomid: req.body.classid })
    .then((cms) => {

      Promise.all(cms.map(users => {
        return Teacher.findOne({ userid: users.userid }).exec().catch(err => {
          res.json("Not Found");
        });
      })).then(users => {
        users = users.filter(users => users !== null);

        res.json(users);
      }).catch(err => {
        // handle error here
      })

    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  var success = false;
  console.log(req.body.Participants);
  var abc = JSON.parse(JSON.stringify(req.body.Participants));
  abc.forEach(participant => {
    console.log("Rollno in Add Participant " + participant.userid);
    var classid = participant.classid;
    var use = participant.userid.toLowerCase();
    var designation = participant.designation;
    const newParticipant = new Participant({
      classroomid: classid,
      userid: use,
      designation: designation
    });

    newParticipant.save()
      .then(() => success = true)
      .catch(err => { success = false; console.log(err) });
  });
  if (success==true) {
    res.send("Participants added");

  }
  else {
    res.send("Error Occured");
  }
});

router.route('/:id').get((req, res) => {
  Participant.find({ classid: req.body.classid })
    .then(Participant => res.json(Participant))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Participant.findByIdAndDelete(req.params.id)
    .then(() => res.json('Participant deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});





module.exports = router;