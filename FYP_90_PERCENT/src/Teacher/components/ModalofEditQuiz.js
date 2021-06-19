import React, { Component } from 'react'
import axios from 'axios';
import Footer from '../TeacherFooter';
import { Link } from 'react-router-dom';
import { Button, Input } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'

export default class ModalofEditQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  onHide() {
    this.setState({ modalShow: false })
  }


  render() {

    return (
      <Modal
        show={this.props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={this.props.onHide}>
          <Modal.Title id="contained-modal-title-vcenter">
            Quiz
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            <div className="card-header card-header-primary">
              <h4 className="card-title">Add Quiz Details</h4>
              <p className="card-category">Enter your Details</p>
            </div>
            <div className="card-body">
              <form>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="bmd-label-floating">Quiz No</label>
                      <input type="text" class="form-control" />
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


                <div class="file">

                  <div class="input-group">
                    <input type="file" class="file" placeholder="Single File" />
                    <span class="input-group-btn">
                      {/* <button type="button" class="btn btn-fab btn-round btn-primary">
                             <i class="material-icons">attach_file</i>
                         </button> */}
                    </span>

                  </div>
                </div>



                <Link to="/teacherdashboard">
                  <button type="submit" class="btn btn-primary pull-right">Add Quiz</button>
                </Link>
                <div class="clearfix"></div>
              </form>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
        <Button>
        <Link to="/managestubyadmin">
            <button onSubmit={this.onSubmit} onClick={this.props.onHide} type="submit" className="btn btn-primary pull-right">Add Student</button>
        </Link>
       </Button>
        </Modal.Footer> */}
      </Modal>
    );
  }
}

