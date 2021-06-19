import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


const Student = props => (
  <tr>
    <td>{props.student.firstname}</td>
    <td>{props.student.lastname}</td>
    <td>{props.student.rollno}</td>
    <td>{props.student.email}</td>
    {/* <td>{props.student.password}</td> */}
    <td>
      {/* <Link to={"/edit/"+props.student._id}>edit</Link> | <a href="#" onClick={() => { props.deleteStudent(props.student._id) }}>delete</a> */}
      <Link to={"/edit/"+props.student._id}></Link>  <a href="#" onClick={() => { props.deleteStudent(props.student._id) }}>delete</a>
      
    </td>
  </tr>
)

export default class TableAllStudent extends Component {

  constructor(props) {
    super(props);

    this.deleteStudent = this.deleteStudent.bind(this)

    this.state = {students: []};
  }

  //sb students show krwaye ga, students ki array bana raha ha
  componentDidMount() {
    axios.get('http://localhost:5000/students/')
      .then(response => {
        this.setState({ students: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteStudent(id) {
    axios.delete('http://localhost:5000/students/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      students: this.state.students.filter(el => el._id !== id)
    })
  }

  studentList() {
    return this.state.students.map(currentstudent => {
      return <Student student={currentstudent} deleteStudent={this.deleteStudent} key={currentstudent._id}/>;
    })
  }


  render() {
    return (
      <div>
        <table class="table">
          <thead class=" text-primary">
          <tr>
          
            <th>
              FirstName
                        </th>
            <th>
              Last Name
                        </th>
            <th>
              Roll No
                        </th>
            <th>
              Emial
                        </th>
            {/* <th>
              Password
                        </th> */}
            <th>
              Action
                        </th>
            {/* <th>
              <i class="material-icons">delete</i>
            </th> */}

            </tr>
          </thead>
          

          <tbody>
            { this.studentList() }
          </tbody>

            {/* <tr>
              <td>
                1
                          </td>
              <td>
                Dakota Rice
                          </td>
              <td>
                Niger
                          </td>
              <td>
                Oud-Turnhout
                          </td>
              <td class="text-primary">
                $36,738
                          </td>
              <td><Link to="/managestubyadmin" class="btn btn-danger">
                <i class="material-icons">delete</i> Delete
                        </Link></td>
            </tr> */}


          
        </table>
      </div>
    )
  }
}
