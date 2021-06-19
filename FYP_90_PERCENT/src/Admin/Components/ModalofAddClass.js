import React, { Component } from 'react'
import axios from 'axios';

import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { Button, Input } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'


export default class ModalofAddClass extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      classid: '',
      coursecode: '',
      classname: '',
      section:'',
      noofparticipents:'',
      users: [],
      errclassid:"",
      errcoursecode:"",
     errinvalidcoursecode:'',
      errclassname:"",
      errsection:"",
    } 
    this.onChangeClassID = this.onChangeClassID.bind(this);
    this.onChangeCourseCode = this.onChangeCourseCode.bind(this);
    this.onChangeClassName = this.onChangeClassName.bind(this);
    this.onChangeSection = this.onChangeSection.bind(this);
    this.onChangeNoOfParticipents = this.onChangeNoOfParticipents.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  onChangeClassID(e) {
    this.setState({
      classid: e.target.value
    })
  }
  onChangeCourseCode(e) {
    this.setState({
      coursecode: e.target.value
    })
  }
 
  onChangeClassName(e) {
    this.setState({
      classname: e.target.value
    })
  }

  onChangeSection(e) {
    this.setState({
      section: e.target.value
    })
  }
  onChangeNoOfParticipents(e) {
    this.setState({
        noofparticipents: e.target.value
    })
  }
      validate = () => {
      let errclassid="";
      let errcoursecode="";
      let errclassname="";
      let errsection="";
      let errinvalidcoursecode="";

      if(!this.state.classid){
        errclassid="Class ID is Required !" 
      }
      if(!this.state.classname){
        errclassname="Classname is Required !";
      }
      if(!this.state.coursecode){
        errcoursecode="Course Code is Required !" 
      }
      if(!this.state.section){
        errsection="Section is Required !";
      }
      if(this.state.coursecode){
        var code_RGX = /^\(?([A-Z]{2})\)?([0-9]{3})$/;
      var codeResult = code_RGX.test(this.state.coursecode);
      if(codeResult == false) {
        errinvalidcoursecode ="Please enter a valid Couse Code!";
      }
    }
      

      if(errclassid || errclassname  || errcoursecode || errsection || errinvalidcoursecode){
       this.setState({ errclassid , errclassname, errcoursecode ,errsection, errinvalidcoursecode  })
        return false
      }
      return true;
    }
  handleSubmit(e) {
   
    e.preventDefault();
    const isvalid = this.validate();
    if(isvalid){
      this.props.onHide(); 
        console.log(this.state);

    }else {
        console.log("fields are empty ")
        
    }
    console.log('class_added');
    const classess = {
        classid: this.state.classid,
        coursecode: this.state.coursecode,
        classname: this.state.classname,
        section:this.state.section,
        noofparticipents:this.state.noofparticipents,
    }

    console.log(classess);
    // //database pr data sent ker rhy ha
    axios.post('http://localhost:5000/classrooms/add', classess)
      .then(res => console.log(res.data));

  }
  onHide() {
    this.setState({ modalShow: false })
  }

  render() {
    return (
      <div>

        <Modal
          show={this.props.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton onClick={this.props.onHide}>
            <Modal.Title id="contained-modal-title-vcenter">
              Class Details
        </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="card">
              <div className="card-header card-header-primary">
                <h4 className="card-title">Add Class</h4>

              </div>
              <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">Class ID</label>
                        <input type="text" className="form-control" 
                           value={this.state.classid}
                        onChange={this.onChangeClassID}
                        />
              {this.state.errclassid ? <p style={{color:'red'}}>{this.state.errclassid}</p>:''}

                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">Course Code</label>
                        <input type="text" class="form-control" 
                           value={this.state.coursecode}
                        onChange={this.onChangeCourseCode}
                        />
                        {this.state.errcoursecode ? <p style={{color:'red'}}>{this.state.errcoursecode}</p>:''}
                        {this.state.errinvalidcoursecode ? <p style={{color:'red'}}>{this.state.errinvalidcoursecode}</p>:''}
                        
                      </div>
                    </div>

                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label class="bmd-label-floating">Class Name</label>
                        <input type="text" class="form-control" 
                           value={this.state.classname}
                        onChange={this.onChangeClassName}
                        />
                         {this.state.errclassname ? <p style={{color:'red'}}>{this.state.errclassname}</p>:''}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">Section</label>
                        <input type="text" class="form-control" 
                           value={this.state.section}
                        onChange={this.onChangeSection}
                        />
                        {this.state.errsection ? <p style={{color:'red'}}>{this.state.errsection}</p>:''}
                      </div>
                    </div>
                  </div>

                  <div class="clearfix"></div>
                  <button onSubmit={this.handleSubmit}  type="submit" className="btn btn-primary pull-right">Add Class</button>
           
                </form>
              </div>
            </div>
          </Modal.Body>
        
        </Modal>

      </div>
    )
  }
}
