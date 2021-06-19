import React, { Component, useState } from 'react'
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import TeacherFooter from './TeacherFooter';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Card, ListGroup, Tab, Row, Col, Sonnet } from 'react-bootstrap';
import People from './components/People';
import Material from './components/Material';
import Axios from 'axios';
import Classactivity from './components/Classactivity';
import Quizactivity from './components/Quizactivity';
import AssignmentActivity from './components/AssignmentActivity';
import ExamActivity from './components/ExamActivity';


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

export default class ClassDetails extends Component {
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
              <TeacherSidebar />
              <div class="main-panel">
                <TeacherNavbar name="Create Assignment" />

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


                <TeacherFooter />
              </div>
            </div>
            <div class="fixed-plugin">
              <div class="dropdown show-dropdown">
                <a href="#" data-toggle="dropdown">
                  <i class="fa fa-cog fa-2x"> </i>
                </a>
                <ul class="dropdown-menu">
                  <li class="header-title"> Sidebar Filters</li>
                  <li class="adjustments-line">
                    <a href="javascript:void(0)" class="switch-trigger active-color">
                      <div class="badge-colors ml-auto mr-auto">
                        <span class="badge filter badge-purple" data-color="purple"></span>
                        <span class="badge filter badge-azure" data-color="azure"></span>
                        <span class="badge filter badge-green" data-color="green"></span>
                        <span class="badge filter badge-warning" data-color="orange"></span>
                        <span class="badge filter badge-danger" data-color="danger"></span>
                        <span class="badge filter badge-rose active" data-color="rose"></span>
                      </div>
                      <div class="clearfix"></div>
                    </a>
                  </li>
                  <li class="header-title">Images</li>
                  <li class="active">
                    <a class="img-holder switch-trigger" href="javascript:void(0)">
                      <img src="../assets/img/sidebar-1.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a class="img-holder switch-trigger" href="javascript:void(0)">
                      <img src="../assets/img/sidebar-2.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a class="img-holder switch-trigger" href="javascript:void(0)">
                      <img src="../assets/img/sidebar-3.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a class="img-holder switch-trigger" href="javascript:void(0)">
                      <img src="../assets/img/sidebar-4.jpg" alt="" />
                    </a>
                  </li>
                  <li class="button-container">
                    <a href="https://www.creative-tim.com/product/material-dashboard" target="_blank" class="btn btn-primary btn-block">Free Download</a>
                  </li>

                  <li class="button-container">
                    <a href="https://demos.creative-tim.com/material-dashboard/docs/2.1/getting-started/introduction.html" target="_blank" class="btn btn-default btn-block">
                      View Documentation
          </a>
                  </li>
                  <li class="button-container github-star">
                    <a class="github-button" href="https://github.com/creativetimofficial/material-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                  </li>
                  <li class="header-title">Thank you for 95 shares!</li>
                  <li class="button-container text-center">
                    <button id="twitter" class="btn btn-round btn-twitter"><i class="fa fa-twitter"></i> &middot; 45</button>
                    <button id="facebook" class="btn btn-round btn-facebook"><i class="fa fa-facebook-f"></i> &middot; 50</button>
                    <br></br>
                    <br></br>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      )
    }
  }
}
