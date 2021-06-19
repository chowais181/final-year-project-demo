import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { Button, Input } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import TableStudent from '../Components/TableStudent';
import TableTeacher from '../Components/TableTeacher';
import ModalofAddStudenttoclass from '../Components/ModalofAddStudenttoclass';
import ModalofAddTeachertoclass from '../Components/ModalofAddTeachertoclass';



export default class PeopleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classid: this.props.classid.classcode,
      studentmodalShow: false,
      teachermodalShow: false,
      rollno: '',
      users: [],
      reload:false,
    }
    this.setState({ classid: this.props.classid.classcode });
  }

  render() {
    return (
      <div>



        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12 col-lg-12 col-sm-12">
                <div class="card">
                  <div class="card-header card-header-primary">
                    <h4 class="card-title ">Teacher List </h4>
                    <button class="btn btn-primary" onClick={() => { this.setState({ teachermodalShow: true }) }}>
                      <i class="material-icons">person_add</i>  Add Teacher
                  </button>
                    <ModalofAddTeachertoclass
                      show={this.state.teachermodalShow}
                      classid={this.state.classid}
                      onHide={() => { this.setState({ teachermodalShow: false });window.location.reload(); }}
                    />
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <TableTeacher classid={this.state.classid} />
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
                    <button class="btn btn-primary" onClick={() => { this.setState({ studentmodalShow: true }) }} >
                      <i class="material-icons">person_add</i>  Add Student
                  </button>
                    <ModalofAddStudenttoclass
                      show={this.state.studentmodalShow}
                      classid={this.state.classid}
                      onHide={() => {
                        this.setState({ studentmodalShow: false });
                        window.location.reload();
                      }}
                    />

                    <p class="card-category"> Here is a list of all Students</p>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <TableStudent classid={this.state.classid} />
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
}


