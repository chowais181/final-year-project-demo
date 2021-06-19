import React, { Component } from 'react'
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from 'react-datepicker';
import moment from 'moment';
// import PDF, { Text, AddPage, Line, Image, Table, Html } from 'jspdf-react';
import "react-datepicker/dist/react-datepicker.css";
import { ThreeSixtyOutlined } from '@material-ui/icons';

export default class ModalofAddMaterial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      file:[],
      currentDateTime: Date().toLocaleString()
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    // this.handleChangeTitle = this.handleChangeTitle.bind(this);
  }

  onHide() {
    this.setState({ modalShow: false })
  }
  onChangeTitle(e) {
    this.state.title = e.target.value;
  }
  onChangeFile(e) {
    var files = e.target.files;
    console.log(files);
    var filesArr = Array.prototype.slice.call(files);
    console.log(filesArr);
    this.setState({ file: filesArr });
  }
  handleSubmit(e) {

    e.preventDefault();
    const data = new FormData() 
    data.append('file', this.state.file[0])
    data.append('name',this.state.title)
    data.append('classid',"123hh")
    data.append('date',this.state.currentDateTime)
    data.append('uploadedby',"m.haris")
    axios.post('http://localhost:5000/file/upload', data)
      .then(res => {
        if (res.status==200){
         this.props.onHide();
        }
      });
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
            Exam
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            <div className="card-header card-header-primary">
              <h4 className="card-title">Add Material</h4>
              <p className="card-category">Enter Material Details</p>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="bmd-label-floating">Material Name</label>
                      {/* <label class="bmd-label-floating">2</label> */}
                      <input type="text" class="form-control"

                        onChange={this.onChangeTitle}

                      />
                    </div>
                  </div>


                </div>


                <div class="row">
                  
                <input type="file" id="myfile" name="myfile"  onChange={this.onChangeFile}></input>
                    
                </div>

                <button type="submit" class="btn btn-primary pull-right">Add Material</button>

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

