const router = require('express').Router();
let Assesment = require('../models/assesment.model');

router.route('/add').post((req, res) => {
  const classid = req.body.Assesment.classid;
  const title = req.body.Assesment.title;
  const startdate = req.body.Assesment.startdate;
  const enddate = req.body.Assesment.enddate;
  const questions = req.body.Assesment.questions;
  const createdby = req.body.Assesment.createdby;
  const assesmenttype = req.body.Assesment.assesmenttype;
  const objective = req.body.Assesment.objective;

  const newAssesment = new Assesment({
    classid,
    title,
    startdate,
    enddate,
    questions,
    objective,
    createdby,
    assesmenttype,
  });
  console.log(req.body.Assesment.questions[0]);
  newAssesment.save()
    .then(() => res.json('Assesment added!'))
    .catch(err => {
      console.log(err)
      res.status(400).json('Error: ' + err)
    });
});


router.route('/quiz').get((req, res) => {
  Assesment.find({ assesmenttype: 'quiz' })
    .then(assesments => { res.json(assesments) })
    .catch(err => res.status(400).json('Error: ' + err));

});



router.route('/assignment').get((req, res) => {
  Assesment.find({ assesmenttype: 'assignment' })
    .then(assesments => { res.json(assesments) })
    .catch(err => res.status(400).json('Error: ' + err));

});
router.route('/exam').get((req, res) => {
  Assesment.find({ assesmenttype: 'exam' })
    .then(assesments => { res.json(assesments) })
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/quizquestions').post((req, res) => {
  Assesment.findOne({ assesmenttype: 'quiz',_id:req.body.id })
    .then(assesment => {
      var ques = [];
      Array.prototype.forEach.call(assesment.questions, obj => {
        console.log(obj);
        var i=0;
        var j;
        for(j=0;j<4;j++)
        {
          if(obj.options[j].isAnswer)
          {
            i=j;
          }
        }
        var q={
          "question":obj.question,
          "optionA":obj.options[0].value,
          "optionB":obj.options[1].value,
          "optionC":obj.options[2].value,
          "optionD":obj.options[3].value,
          "answer": obj.options[i].value
        };
        ques.push(q);
      });
      res.json(ques);
    })
    .catch(err => res.status(400).json('Error: ' + err));

});
module.exports = router;


/*{
  "question": "What temperature does water boil at?",
  "optionA": "50 degrees Celcius",
  "optionB": "25 degrees Celcius",
  "optionC": "100 degrees Celcius",
  "optionD": "150 degrees Celcius",
  "answer": "100 degrees Celcius"
},*/

/*answer: "EDIC"
optionA: "EBCDIC"
optionB: "BCD"
optionC: "ASCII"
optionD: "EDIC"
question: "Which of the following is not a type of computer code?"*/