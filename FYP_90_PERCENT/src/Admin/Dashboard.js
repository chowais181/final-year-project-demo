import React,{Component} from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

//import { Fade } from "react-awesome-reveal";

import { Link } from 'react-router-dom';
import axios from 'axios';

// import Zoom from 'react-reveal/Zoom';
// import Flip from 'react-reveal/Flip';
// import Bounce from 'react-reveal/Bounce';
 
// import Roll from 'react-reveal/Roll';


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
     classes:[],
     images:[
        "https://img.freepik.com/free-vector/students-classroom-flat-vector-illustration_74855-6663.jpg?size=626&ext=jpg",
        "https://image.shutterstock.com/z/stock-vector-vector-illustration-business-man-study-in-online-course-the-mentor-explain-in-online-class-computer-1496233118.jpg",
        "https://c8.alamy.com/comp/2C3KEYG/online-training-teacher-explain-a-student-in-computer-video-education-and-courses-learning-digital-vector-illustration-2C3KEYG.jpg",
        "https://cdn5.vectorstock.com/i/1000x1000/90/24/education-online-students-with-laptop-watching-vector-30289024.jpg",
        "https://cdn2.vectorstock.com/i/1000x1000/52/11/online-education-concept-distant-training-courses-vector-30565211.jpg",
        "https://img.freepik.com/free-vector/students-classroom-flat-vector-illustration_74855-6663.jpg?size=626&ext=jpg",

     ]
    } 
     
  }
  componentDidMount() {
    axios.get('http://localhost:5000/classrooms/')
      .then(response => {
        this.setState({ classes: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
        <div>     
        <div class="wrapper">
       <Sidebar /> 
        <div class="main-panel">
        <Navbar name="Admin Dashboard"/>  
   
     
      <div class="content">
        <div class="container-fluid">
        <div class="row flex-wrap">
     { this.state.classes.map(currentclass => {
      
    return (
             <div class="col-lg-4 col-md-4 col-sm-6">
                  <div class="card card-stats"  style={{height:'325px', width:'325px'}}>
                          <div class="card-header card-header-success card-header-icon">
                            <div class="card-icon" style={{width:'100px'}}>
                              <i class="material-icons"><h3>{currentclass.section}</h3></i>
                            </div>
                            <p class="card-category">{currentclass.coursecode}</p>
                            <h3 class="card-title">{currentclass.classname}</h3>
                          </div>
                          
                          <div class="card-footer">
                            <div class="stats">
                              <i class="material-icons">date_range</i> 
                              <Link to={'/classdetailsbyadmin/'+currentclass.classid}>
                              <img src= {this.state.images[Math.floor(Math.random() * 5) + 1 ]} 
                              style={{height:'160px', width:'283px'}}
                              alt="classroom_image"/>
                              </Link>
                            
                            </div>
                          </div>
                    </div>
               </div>
            
         )
      })
     }
     </div>
            
               
            
          </div>
          
      </div>
     <Footer />
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