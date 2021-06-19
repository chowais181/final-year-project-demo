import React, { Component } from 'react'
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Radio } from '@material-ui/core';



export default class ModalofAddObjQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      startDate: new Date(),
      endDate: new Date(),
      startdateString: '',
      enddateString: '',
      questions: [{
        id: uuidv4(), question: '', options: [
          {
            "id": "Option A",
            "value": "Option 1",
            "isAnswer": false
          },
          {
            "id": "Option B",
            "value": "Option 2",
            "isAnswer": false
          },
          {
            "id": "Option C",
            "value": "Option 3",
            "isAnswer": false
          },
          {
            "id": "Option D",
            "value": "Option 4",
            "isAnswer": false
          },
        ],
        marks: ''
      }],

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeED = this.handleChangeED.bind(this);
    this.handleChangeSD = this.handleChangeSD.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.ChangeStartDate = this.ChangeStartDate.bind(this);
    this.ChangeEndDate = this.ChangeEndDate.bind(this);
    // this.handleChangeTitle = this.handleChangeTitle.bind(this);
  }

  ChangeStartDate(date) {
    var stringDate = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
    this.setState({
      startdateString: stringDate
    })
  }
  ChangeEndDate(date) {
    var stringDate = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
    this.setState({
      enddateString: stringDate
    })
  }
  onHide() {
    this.setState({ modalShow: false })
  }
  onChangeTitle(e) {
    this.state.title = e.target.value;
    // this.setState({
    //   title: e.target.value
    // })
  }
  handleSubmit(e) {

    e.preventDefault();
    const Assesment = {
      classid: this.props.classid,
      title: this.state.title,
      startdate: this.state.startdateString,
      enddate: this.state.enddateString,
      questions: this.state.questions,
      objective:true,
      createdby: this.props.username,
      assesmenttype: "quiz"

    }
    console.log(Assesment)
    axios.post('http://localhost:5000/assesment/add', { Assesment })
      .then(res => {
        console.log(res.data);
      });
  }

  handleChangeSD(date) {
    console.log(date)
    this.setState({

      startdate: date
    })
  }

  handleChangeED(date) {
    this.setState({
      enddate: date
    })
  }

  render() {
    const handleChangeInput = (id, event) => {
      const newInputFields = this.state.questions.map(question => {
        if (id === question.id) {
          question[event.target.name] = event.target.value
        }
        return question;
      })

      this.setState({ questions: newInputFields });
    }

    const handleChangeInputForOptions = (qid,aid, event) => {
      const newInputFields = this.state.questions.map(question => {
        if (qid === question.id) {
          question.options.map(option => {
            if (aid === option.id) {
              option.value  = event.target.value
            }
            
          });
        }
        return question;
      })

      this.setState({ questions: newInputFields });
    }
    const handleChangeAnswerOptions = (qid, event) => {
      const aid=event.target.value;
      const newInputFields = this.state.questions.map(question => {
        if (qid === question.id) {
          question.options.map(option => {
            if (aid === option.id) {
              option.isAnswer  = true;
            }
            else
            {
              option.isAnswer  = false;
            }
            
          });
        }
        return question;
      })

      this.setState({ questions: newInputFields });
    }



    const handleAddFields = () => {
      this.setState({
        questions: [...this.state.questions, {
          id: uuidv4(), question: '', options: [
            {
              "id": "Option A",
              "value": "Option 1",
              "isAnswer": false
            },
            {
              "id": "Option B",
              "value": "Option 2",
              "isAnswer": false
            },
            {
              "id": "Option C",
              "value": "Option 3",
              "isAnswer": false
            },
            {
              "id": "Option D",
              "value": "Option 4",
              "isAnswer": false
            },
          ], marks: ''
        }]
      })
    }

    const handleRemoveFields = id => {
      const values = [...this.state.questions];
      values.splice(values.findIndex(value => value.id === id), 1);
      this.setState({ questions: values });
    }

    return (
      <Modal
        show={this.props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={this.props.onHide}>
          <Modal.Title id="contained-modal-title-vcenter">
            Quiz
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            <div className="card-header card-header-primary">
              <h4 className="card-title">Add Quiz</h4>
              <p className="card-category">Enter Quiz Details</p>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="bmd-label-floating">Quiz Name</label>
                      <label class="bmd-label-floating"></label>
                      <input type="text" class="form-control"
                        onChange={this.onChangeTitle}
                      />
                    </div>
                  </div>
                </div>


                <div class="row"  >
                  <div class="col-md-12">
                    <div class="form-group">
                      <label class="bmd-label-floating">Start Date</label>
                      <DatePicker
                        selected={this.state.startDate}
                        onChange={date => this.ChangeStartDate(date)}
                        showTimeSelect
                        dateFormat="Pp"
                      />
                    </div>
                    <div class="form-group">
                      <label class="bmd-label-floating ">End Date</label>
                      <DatePicker
                        selected={this.state.endDate}
                        onChange={date => this.ChangeEndDate(date)}
                        showTimeSelect
                        dateFormat="Pp"
                      />
                    </div>
                  </div>
                  <div class="row">
                    {this.state.questions.map(question => (
                      <div key={question.id}>
                        <TextField
                          name="question"
                          label="Question"
                          variant="filled"
                          value={question.question}
                          onChange={event => handleChangeInput(question.id, event)}
                          style={{ width: 450, paddingLeft: 30, paddingRight: 20 }}
                        />
                        <TextField
                          name="marks"
                          label="Marks"
                          variant="filled"
                          value={question.marks}
                          onChange={event => handleChangeInput(question.id, event)}
                        />

                        <div class="row">


                          {question.options.map((option, i) => (

                            <div key={i}>
                              <TextField
                                name="name"
                                label={option.id}
                                variant="filled"
                                onChange={event => handleChangeInputForOptions(question.id,option.id, event)}
                                style={{ width: '60%' }}
                              />


                            </div>

                          ))
                          }

                          <div>
                            <label for="answer">Choose Correct answer:</label>

                            <select name="answer" id="answer" style={{ width: '60%', paddingRight: 20 }} onChange={event => handleChangeAnswerOptions(question.id,event)}>
                              <option value="Option A">A</option>
                              <option value="Option B">B</option>
                              <option value="Option C">C</option>
                              <option value="Option D">D</option>
                            </select>
                          </div>

                        </div>

                        <IconButton disabled={this.state.questions.length === 1} onClick={() => handleRemoveFields(question.id)}>
                          <RemoveIcon />
                        </IconButton>
                        <IconButton
                          onClick={handleAddFields}
                        >
                          <AddIcon />
                        </IconButton>
                      </div>
                    ))}
                  </div>
                </div>

                <button type="submit" class="btn btn-primary pull-right">Add Quiz</button>

                <div class="clearfix"></div>
              </form>
            </div>
          </div>
        </Modal.Body>

      </Modal>
    );
  }
}

