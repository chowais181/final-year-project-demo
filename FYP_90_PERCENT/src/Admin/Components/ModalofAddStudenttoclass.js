import React, { Component } from 'react'
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();


export default class ModalofAddStudenttoclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classid: this.props.classid,
      modalShow: false,
      students: [],
      users: [],
      errstudent:"",
    }
    console.log(this.props.show);
    this.setState({ classid: this.props.classid })
    this.onChangeRollno = this.onChangeRollno.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.getOptions();
  }

  async getOptions() {
    console.log(this.state.classid);
    const body = { "classid": this.state.classid };
    const res = await axios.post("http://localhost:5000/students/userbyclass", body)
    const data = res.data
    console.log("New Data is \n" + data);
    const options = data.map(d => ({
      "value": d.rollno,
      "label": d.rollno + ' ' + d.firstname + ' ' + d.lastname,
    }))
    this.setState({ users: options })
  }



  onChangeRollno(e) {
    this.setState({
      rollno: e.target.value
    })
  }


  validate = () => {
    let errstudent="";
    
     
    if(this.state.students.length==0){
      errstudent="Please select at least 1 student !";
    }

    if(errstudent){
     this.setState({errstudent })
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
    const data = this.state.students;
    const participants = data.map(d => ({
      "classid": this.state.classid,
      "userid": d,
      "designation": "student"
    }))
    console.log(participants);
    // //database pr dtata sent ker rhy ha
    axios.post('http://localhost:5000/participant/add', { "Participants": participants })
      .then(res => {
        console.log(res.data);
        this.getOptions();
      });

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
          {/* <Modal.Title id="contained-modal-title-vcenter">
            Add Student
                  </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            <div className="card-header card-header-primary">
              <h4 className="card-title">Select Student</h4>
              <p className="card-category">Select one student</p>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">First Name</label>
                      <Select
                        
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        onChange={(data) => {
                          const students = data.map(d => (d.value))
                          console.log(students);
                          this.setState({ students: students });
                        }}
                        isMulti
                        options={this.state.users}
                      />
                        {this.state.errstudent ? <p style={{color:'red'}}>{this.state.errstudent}</p>:''}
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

