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



export default class ModalofAddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      firstname: '',
      lastname: '',
      rollno: '',
      email: '',
      password: '',
      users: [],
      errfirstname:"",
      errlastname:"",
      errrollno:"",
      errinvalidrollno:'',
      erremail:"",
      errpassword:"",
      errpasswordlen:'',
      errinvalidemail:'',
    }

    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeRollno = this.onChangeRollno.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


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
  onChangeRollno(e) {
    this.setState({
      rollno: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  validate = () => {
    let errfirstname="";
    let errlastname="";
   let  errrollno="";
    let erremail="";
    let errpassword="";
    let errpasswordlen="";
    let errinvalidemail="";
    let errinvalidrollno="";

    if(!this.state.firstname){
      errfirstname="First Name is Required !" ;
    }
    if(!this.state.lastname){
      errlastname="Last Name is Required !";
    }
    if(!this.state.rollno){
      errrollno="Roll No is Required !" 
    }
    if(this.state.rollno){
      var rollno_RGEX = /^\(?([0-9]{2})\)?([A-Z]{1})[-]?([0-9]{4})$/;
      var rollResult = rollno_RGEX.test(this.state.rollno);
      if(rollResult == false)
      {
        errinvalidrollno="Please enter a valid Roll Number";
         
      }
    }
    if(!this.state.email){
      erremail="Email is Required !";
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
    if(!this.state.password){
      errpassword="Password is Required !";
    }
    if(this.state.password && this.state.password.length < 8 ){
      errpasswordlen="Password must be of atleast 8 Digits";
    }

    if(errfirstname || errlastname  || errrollno || erremail || errpassword || errpasswordlen || errinvalidemail || errinvalidrollno){
     this.setState({ errfirstname , errlastname, errrollno ,erremail,errpassword, errpasswordlen , errinvalidemail,errinvalidrollno})
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
    console.log('student');
    const student = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      rollno: this.state.rollno,
      email: this.state.email,
      password: this.state.password
    }

    const user_details = {
      username: this.state.rollno,
      designation: "student",
      password: this.state.password
    }

    console.log(student);
    // database pr student ke table pr data sent ker rhy ha
    axios.post('http://localhost:5000/students/add', student)
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
      <Modal
        show={this.props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={this.props.onHide}>
          <Modal.Title id="contained-modal-title-vcenter">
            Student Details
                  </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            <div className="card-header card-header-primary">
              <h4 className="card-title">Add Details</h4>
              <p className="card-category">Complete your Details</p>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">First Name</label>
                      <input type="text"   class="form-control"  
                        value={this.state.firstname}
                        onChange={this.onChangeFirstname}
                      />
                       {this.state.errfirstname ? <p style={{color:'red'}}>{this.state.errfirstname}</p>:''}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">Last Name</label>
                      <input type="text"   class="form-control"
                        value={this.state.lastname}
                        onChange={this.onChangeLastname}
                      />
                      {this.state.errlastname ? <p style={{color:'red'}}>{this.state.errlastname}</p>:''}
                    </div>
                  </div>

                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">Roll No (17F-1234)</label>
                      <input type="text"   class="form-control" 
                        value={this.state.rollno}
                        onChange={this.onChangeRollno}
                      />
                       {this.state.errrollno ? <p style={{color:'red'}}>{this.state.errrollno}</p>:''}
                       {this.state.errinvalidrollno ? <p style={{color:'red'}}>{this.state.errinvalidrollno}</p>:''}
                       
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">Email (abc@gmail.com)</label>
                      <input type="text"   class="form-control"
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
                      <label className="bmd-label-floating">Password</label>
                      <input type="password" class="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                      />
                       {this.state.errpassword ? <p style={{color:'red'}}>{this.state.errpassword}</p>:''}
                       {this.state.errpasswordlen ? <p style={{color:'red'}}>{this.state.errpasswordlen}</p>:''}
                    </div>
                  </div>
                </div>

                <div className="clearfix"></div>
                
                <button onSubmit={this.handleSubmit} type="submit" className="btn btn-primary pull-right">Add Student</button>
           
              </form>
            </div>
          </div>
        </Modal.Body>
        
      </Modal>
    );
  }
}

