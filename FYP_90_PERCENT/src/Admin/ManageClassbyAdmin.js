import React from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {Button , Input } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ModalofAddClass from './Components/ModalofAddClass';
import TableClass from './Components/TableClass';


export default function ManageClassByAdmin() {
  const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>     
        <div className="wrapper ">
            <Sidebar />
        <div className="main-panel">
         <Navbar  name="Manage Class"/>
     
         <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title ">Class List </h4>
                  <button className="btn btn-primary"onClick={() => setModalShow(true)}>
                  <i className="material-icons">person_add</i>  Add Class
                  </button>
                  <ModalofAddClass
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
               
                  <p className="card-category"> </p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <TableClass />
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
 
          
     <Footer />
    </div>
  </div>
  <div className="fixed-plugin">
    <div className="dropdown show-dropdown">
      <a href="#" data-toggle="dropdown">
        <i class="fa fa-cog fa-2x"> </i>
      </a>
      <ul className="dropdown-menu">
        <li className="header-title"> Sidebar Filters</li>
        <li className="adjustments-line">
          <a href="javascript:void(0)" class="switch-trigger active-color">
            <div className="badge-colors ml-auto mr-auto">
              <span className="badge filter badge-purple" data-color="purple"></span>
              <span className="badge filter badge-azure" data-color="azure"></span>
              <span className="badge filter badge-green" data-color="green"></span>
              <span className="badge filter badge-warning" data-color="orange"></span>
              <span className="badge filter badge-danger" data-color="danger"></span>
              <span className="badge filter badge-rose active" data-color="rose"></span>
            </div>
            <div className="clearfix"></div>
          </a>
        </li>
        <li className="header-title">Images</li>
        <li className="active">
          <a className="img-holder switch-trigger" href="javascript:void(0)">
            <img src="../assets/img/sidebar-1.jpg" alt="" />
          </a>
        </li>
        <li>
          <a className="img-holder switch-trigger" href="javascript:void(0)">
            <img src="../assets/img/sidebar-2.jpg" alt="" />
          </a>
        </li>
        <li>
          <a className="img-holder switch-trigger" href="javascript:void(0)">
            <img src="../assets/img/sidebar-3.jpg" alt="" />
          </a>
        </li>
        <li>
          <a className="img-holder switch-trigger" href="javascript:void(0)">
            <img src="../assets/img/sidebar-4.jpg" alt="" />
          </a>
        </li>
        <li className="button-container">
          <a href="https://www.creative-tim.com/product/material-dashboard" target="_blank" class="btn btn-primary btn-block">Free Download</a>
        </li>
        
        <li className="button-container">
          <a href="https://demos.creative-tim.com/material-dashboard/docs/2.1/getting-started/introduction.html" target="_blank" class="btn btn-default btn-block">
            View Documentation
          </a>
        </li>
        <li className="button-container github-star">
          <a className="github-button" href="https://github.com/creativetimofficial/material-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
        </li>
        <li className="header-title">Thank you for 95 shares!</li>
        <li className="button-container text-center">
          <button id="twitter" className="btn btn-round btn-twitter"><i className="fa fa-twitter"></i> &middot; 45</button>
          <button id="facebook" className="btn btn-round btn-facebook"><i className="fa fa-facebook-f"></i> &middot; 50</button>
          <br></br>
          <br></br>
        </li>
      </ul>
    </div>
  </div>
   
        </div>
    )
}
