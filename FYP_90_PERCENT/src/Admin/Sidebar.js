import React from 'react'
import { Link } from 'react-router-dom';
import {Button , Input } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ModalofAddClass from './Components/ModalofAddClass';

 

export default function Sidebar() {
  const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
           <div class="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
       
       <div class="logo" ><Link  to="/admindashboard" style={{fontWeight:'bold',marginTop:'3px', fontSize:'36px'}}>
          EduTech 
         </Link></div>
       <div class="sidebar-wrapper">
         <ul class="nav">
           <li class="nav-item active ">
             <Link class="nav-link" to="/admindashboard">
               <i class="material-icons">dashboard</i>
               <p>Dashboard</p>
             </Link>
           </li>
           <li class="nav-item">
             <Link class="nav-link" to="/manageclassbyadmin">
               <i class="material-icons">people</i>
               <p>Manage Class</p>
             </Link>
           </li>
           <li class="nav-item">
             <Link class="nav-link" to="/managestubyadmin">
               <i class="material-icons">people</i>
               <p>Manage Student </p>
             </Link>
           </li>
           <li class="nav-item">
             <Link class="nav-link" to="/manageteabyadmin">
               <i class="material-icons">people</i>
               <p>Manage Teacher</p>
             </Link>
           </li>
         
           
          
          <li class="nav-item">
          <Link class="nav-link" to="#">
           <button class="nav-link"  class="btn btn-primary" onClick={() => setModalShow(true)} >
              <i style={{margin:'auto',paddingRight:'7px'}}class="material-icons">person_add</i>  
                <p style={{marginRight:'17px'}}>Add Class</p>
             </button>
             </Link>
             <ModalofAddClass
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
          </li>
           
         </ul>
       </div>
 
     </div>
          </div>
    )
}
