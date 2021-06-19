import React from 'react'
import TeacherSidebar from '../TeacherSidebar';
import TeacherNavbar from '../TeacherNavbar';
import TeacherFooter from '../TeacherFooter';
import { Link } from 'react-router-dom';
import { Button, Input } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import TablePeopleClass from '../components/TablePeopleClass';
import TeacherPeople from '../components/TeacherPeople';


export default function People(classid) {

  return (
    <div>



<div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Teacher List </h4>
                  <button class="btn btn-primary" >
                    <i class="material-icons">person_add</i>  Add Teacher
                  </button>

                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <TablePeopleClass classid={classid} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>




      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Student List </h4>
                  <button class="btn btn-primary" >
                    <i class="material-icons">person_add</i>  Add Student
                  </button>


                  <p class="card-category"> Here is a list of all Students</p>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <TeacherPeople classid={classid} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </div>



  )
}


