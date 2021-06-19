import React, { Component, useState } from 'react'
import StudentSidebar from './StudentSidebar';
import StudentNavbar from './StudentNavbar';
import StudentFooter from './StudentFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs,Tab} from 'react-bootstrap';
import People from './components/PeopleStudent';
import Material from './components/MaterialStudent';
import Axios from 'axios';
import Quizactivity from './components/QuizactivityStudent';
import AssignmentActivity from './components/AssignmentActivityStudent';
import ExamActivity from './components/ExamActivityStudent';


function ControlledTabs(classcode) {
  const [key, setKey] = useState('activity');

  return (
    <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
      <Tab eventKey="quizactivity" title="Quizzes ">
        <Quizactivity />
      </Tab>
      <Tab eventKey="assignmentactivity" title="Assignments ">
        <AssignmentActivity />
      </Tab>
      <Tab eventKey="examactivity" title="Exams">
        <ExamActivity />
      </Tab>
      <Tab eventKey="material" title="Class Material ">
        <Material />
      </Tab>
      <Tab eventKey="people" title="People" >
        <People classid={classcode} />
      </Tab>
    </Tabs>
  );
}

export default class ClassDetailsStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classdetails: [],
      classid: "",
      loading: true,
    }
    this.state.classid = this.props.computedMatch.params.id;


  }
  async componentDidMount() {
    await Axios.post('http://localhost:5000/classrooms/details', { classid: this.state.classid })
      .then(res => {
        if (res.status == 200) {
          this.state.classdetails = res.data;

          // this.setState({ classdata: res.data })
        }
      })
      .catch(err => {
        console.log('error', err);
      })
    this.setState({ loading: false });
  }

  render() {
    let load = this.state.loading;
    if (load) { return (<h3>Loading </h3>) }
    else {
      return (
        <div>

          <div>
            <div class="wrapper ">
              <StudentSidebar />
              <div class="main-panel">
                <StudentNavbar name="Student Dashboard" />

                <div class="content">


                  <div class="container-fluid">


                    <div class="row">
                      <div class="col-lg-2 col-md-2 col-sm-6"><h3>{this.state.classdetails.coursecode}</h3></div>
                      <div class="col-lg-9 col-md-9 col-sm-6">
                        <img src="https://image.shutterstock.com/z/stock-vector-vector-illustration-business-man-study-in-online-course-the-mentor-explain-in-online-class-computer-1496233118.jpg"
                          style={{ height: '200px', width: '300px' }}
                          alt="classroom_image" />
                      </div>
                    </div>

                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-6">
                      <ControlledTabs classcode={this.state.classid} />
                    </div>
                  </div>
                </div>


                <StudentFooter />
              </div>
            </div>
           

          </div>
        </div>
      )
    }
  }
}
