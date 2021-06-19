import React, { Component } from 'react'
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();


export default class ModalofAddTeachertoclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classid: this.props.classid,
      modalShow: false,
      teachers: [],
      users: [],
      userid:"",
      errteacher:"",

    }
    console.log(this.props.show);
    this.setState({ classid: this.props.classid })
    this.onChangeuserid = this.onChangeuserid.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.getOptions();
  }

  async getOptions() {
    console.log(this.state.classid);
    const body = { "classid": this.state.classid };
    const res = await axios.post("http://localhost:5000/teachers/userbyclass", body)
    const data = res.data
    console.log("New Data is \n" + data);
    const options = data.map(d => ({
      "value": d.userid,
      "label": d.userid + ' ' + d.firstname + ' ' + d.lastname,
    }))
    this.setState({ users: options })
  }



  onChangeuserid(e) {
    this.setState({
      userid: e.target.value
    })
  }

  validate = () => {
    let errteacher="";
    
     
    if(this.state.teachers.length==0){
      errteacher="Please select Teacher !";
    }

    if(errteacher){
     this.setState({errteacher })
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
    const data = this.state.teachers;
    const participants = data.map(d => ({
      "classid": this.state.classid,
      "userid": d,
      "designation": "teacher"
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
            Add Teacher
                  </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            <div className="card-header card-header-primary">
              <h4 className="card-title">Select Teacher</h4>
              <p className="card-category">Select one Teacher</p>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating"> Name</label>
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        onChange={(data) => {
                          const teachers = data.map(d => (d.value))
                          console.log(teachers);
                          this.setState({ teachers: teachers });
                        }}
                        isMulti
                        options={this.state.users}
                      />
                       {this.state.errteacher ? <p style={{color:'red'}}>{this.state.errteacher}</p>:''}
                    </div>
                  </div>

                </div>



                <div className="clearfix"></div>

                <button onSubmit={this.handleSubmit}  type="submit" className="btn btn-primary pull-right">Add Teacher</button>

              </form>
            </div>
          </div>
        </Modal.Body>
        
      </Modal>
    );
  }
}

