import React, { useState, Component } from 'react'
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import TeacherFooter from './TeacherFooter';
import ClassroomCard from './components/ClassroomCard';
import Axios from 'axios';


const Classroom = function (course_code, course_name, section) {
  const cc = course_code;
  const cn = course_name;
  const sec = section;
  return { cc, cn, sec };
};


export default class TeacherDashboard extends Component {

  constructor() {
    super()
    this.state = {
      classdata: [],
      username:"",
      loading: true,
    };
    
    this.state.username=sessionStorage.getItem("email");

    console.log(this.state.username);

    
    // Axios.post('http://localhost:5000/participant/getclassrooms', { userid: "m.haris" })
    //   .then(res => {
    //     if (res.status == 200) {
    //       this.state.classdata = res.data;
    //       // this.setState({ classdata: res.data })
    //     }
    //   })
    //   .catch(err => {
    //     console.log('error', err);
    //   })
  }

  async componentDidMount() {
   await  Axios.post('http://localhost:5000/participant/getclassrooms', { userid: this.state.username })
      .then(res => {
        if (res.status == 200) {
          this.state.classdata = res.data;
        
          // this.setState({ classdata: res.data })
        }

      })
      .catch(err => {
        console.log('error', err);
      })
      this.setState({loading:false})
  }
  render() {
  if (this.state.loading){
    return(<h3>Loading</h3>);
  }
    else{
    return (

      <div>
        <div class="wrapper ">
          <TeacherSidebar />
          <div class="main-panel">
            <TeacherNavbar />

            <div class="content">
              <div class="container-fluid">
                <div class="row">
                { this.state.classdata.map(currentclass => {
                  return (
                    <ClassroomCard course_code={currentclass.coursecode} course_name={currentclass.classname} section={currentclass.section} classcode={currentclass.classid}/>
                )})}

                {/* <ClassroomCard course_code="cs602" course_name="OOP" section="8F"/> */}
               
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
    )
  }
}
}