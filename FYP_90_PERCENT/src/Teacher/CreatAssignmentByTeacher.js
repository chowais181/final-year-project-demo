import React from 'react'
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import TeacherFooter from './TeacherFooter';
import { Link } from 'react-router-dom';



export default function CreateExamByTeacher() {
    return (
        <div>     
        <div class="wrapper ">
            <TeacherSidebar />
        <div class="main-panel">
         <TeacherNavbar  name="Create Assignment"/>
     
         <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Add Assignment</h4>
                  <p class="card-category">Complete your Data</p>
                </div>
                <div class="card-body">
                  <form>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Assignment Number</label>
                          <input type="text" class="form-control"  />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Course Name</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                     
                    </div>
                  
                     <div class="row">
                     <div class="form-group col-md-6">
                        <select class="form-control ">
                        <option value="" selected>Type..</option>
                        <option value="1">Subjective</option>
                        <option value="2">Objetive</option>
                        </select>
                        
                        </div>
                        </div>

                       
                        <Link to="/teacherdashboard">
                          <button type="submit" class="btn btn-primary pull-right">Add Assignment</button>
                    </Link>
                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
             
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
