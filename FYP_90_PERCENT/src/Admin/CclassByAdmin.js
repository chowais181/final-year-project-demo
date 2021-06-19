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


 function MyModalofAddClass(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
           Teacher Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Add Details</h4>
                  <p class="card-category">Complete your Data</p>
                </div>
                <div class="card-body">
                  <form>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Class Name</label>
                          <input type="text" class="form-control"  />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Course code</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                     
                    </div>
                  
                     <div class="row">
                     <div class="form-group col-md-6">
                        <select class="form-control ">
                        <option  >Select Section</option>
                        <option value="1">A</option>
                        <option value="2">B</option>
                        <option value="3">C</option>
                        <option value="1">D</option>
                        <option value="2">E</option>
                        <option value="3">F</option>
                        </select>
                        
                        </div>
                        </div>
 
                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
      </Modal.Body>
      <Modal.Footer>
     
        <Button>
        <Link to="/admindashboard">
            <button  onClick={props.onHide} type="submit"  class="btn btn-primary pull-right">Add Class</button>
         </Link>
          </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default function CclassByAdmin() {

  const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>     
        <div class="wrapper ">
            <Sidebar />
        <div class="main-panel">
         <Navbar  name="Create Class"/>
     
         <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8">
            <button class="btn btn-primary"onClick={() => setModalShow(true)}>
                  <i class="material-icons">person_add</i>    Add Class
             </button>
                  <MyModalofAddClass
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
            </div>
          </div>
        </div>
      </div>
   
     <Footer />
    </div>
  </div>
 
   
        </div>
    )
}



