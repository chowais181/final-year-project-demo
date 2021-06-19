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


export default class ModalofAddTeacher extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      userid:'',
      firstname: '',
      lastname: '',
      email: '',
      qualification:'',
      department:'',
      password: '',
      erruserid:'',
      errfirstname: '',
      errlastname: '',
      erremail: '',
      errqualification:'',
      errdepartment:'',
      errpassword: '',
      errinvalidemail:'',
      errinvalidpassword:'',
      users: []
    } 
    this.onChangeUserid = this.onChangeUserid.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeQualification = this.onChangeQualification.bind(this);
    this.onChangeDepartment = this.onChangeDepartment.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeUserid(e) {
    this.setState({
      userid: e.target.value
    })
  }
  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value
    })
  }
  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value
    })
  }
 
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeQualification(e) {
    this.setState({
      qualification: e.target.value
    })
  }
  onChangeDepartment(e) {
    this.setState({
      department: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  
  validate = () => {
    let erruserid="";
    let errfirstname="";
    let errlastname="";
    let errdepartment="";
    let errqualification="";
    let erremail="";
    let errpassword="";
    let errinvalidemail='';
    let errinvalidpassword='';


    if(!this.state.userid){
      erruserid="User ID  is Required !" 
    }

    if(!this.state.firstname){
      errfirstname="First Name is Required !" 
    }
    if(!this.state.lastname){
      errlastname="Last Name is Required !";
    }
    if(!this.state.department){
      errdepartment="Department is Required !" 
    }
    if(!this.state.qualification){
      errqualification="Qualification is Required !" 
    }
    if(!this.state.email){
      erremail="Email is Required !";
    }
    if(!this.state.password){
      errpassword="Password is Required !";
    }
    if(this.state.email){
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
             if (reg.test(this.state.email) === true){
                console.log('email is valid' );
             }
             else{
              errinvalidemail="Email is Invalid !";
             }
       }

       if(this.state.password && this.state.password.length < 8 ){
        errinvalidpassword="Password must be of atleast 8 Digits";
      }
    if(erruserid || errfirstname || errlastname  || errdepartment || errqualification || erremail || errpassword || errinvalidemail || errinvalidpassword ){
     this.setState({erruserid, errfirstname , errlastname, errdepartment ,errqualification,erremail,errpassword , errinvalidemail, errinvalidpassword})
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
    console.log('teacher');
    const teacher = {
      userid:this.state.userid,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      qualification: this.state.qualification,
      department: this.state.department
    }
    const user_details = {
      username: this.state.userid,
      designation: "teacher",
      password: this.state.password
    }
    console.log(teacher);
    // //database pr dtata sent ker rhy ha
    axios.post('http://localhost:5000/teachers/add', teacher)
      .then(res => console.log(res.data));

      console.log(user_details);
      // database pr user_detail ke table pr data sent ker rhy ha
      axios.post('http://localhost:5000/users/signup', user_details)
        .then(res => console.log(res.data));

    // // window.location = '/';

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
              Teacher Details
        </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="card">
              <div className="card-header card-header-primary">
                <h4 className="card-title">Add Details</h4>

              </div>
              <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">User Id</label>
                        <input type="text" className="form-control" 
                           value={this.state.userid}
                        onChange={this.onChangeUserid}
                        />
                          {this.state.erruserid ? <p style={{color:'red'}}>{this.state.erruserid}</p>:''}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">First Name</label>
                        <input type="text" class="form-control" 
                           value={this.state.firstname}
                        onChange={this.onChangeFirstname}
                        />
                          {this.state.errfirstname ? <p style={{color:'red'}}>{this.state.errfirstname}</p>:''}
                      </div>
                    </div>

                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label class="bmd-label-floating">Last Name</label>
                        <input type="text" class="form-control" 
                           value={this.state.lastname}
                        onChange={this.onChangeLastname}
                        />
                          {this.state.errlastname ? <p style={{color:'red'}}>{this.state.errlastname}</p>:''}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">Email</label>
                        <input type="text" class="form-control" 
                           value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                         {this.state.erremail ? <p style={{color:'red'}}>{this.state.erremail}</p>:''}
                         {this.state.errinvalidemail ? <p style={{color:'red'}}>{this.state.errinvalidemail}</p>:''}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label class="bmd-label-floating">Qualification</label>
                        <input type="text" class="form-control" 
                           value={this.state.qualification}
                        onChange={this.onChangeQualification}
                        />
                         {this.state.errqualification ? <p style={{color:'red'}}>{this.state.errqualification}</p>:''}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">Department</label>
                        <input type="text" class="form-control" 
                           value={this.state.department}
                        onChange={this.onChangeDepartment}
                        />
                         {this.state.errdepartment ? <p style={{color:'red'}}>{this.state.errdepartment}</p>:''}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">Password</label>
                        <input type="password" class="form-control" 
                           value={this.state.password}
                        onChange={this.onChangePassword}
                        />
                         {this.state.errpassword ? <p style={{color:'red'}}>{this.state.errpassword}</p>:''}
                         {this.state.errinvalidpassword ? <p style={{color:'red'}}>{this.state.errinvalidpassword}</p>:''}
                      </div>
                    </div>
                  </div>


                  <div class="clearfix"></div>
                  <button onSubmit={this.handleSubmit} type="submit" className="btn btn-primary pull-right">Add Teacher</button>
           
                </form>
              </div>
            </div>
          </Modal.Body>
        
        </Modal>

      </div>
    )
  }
}
