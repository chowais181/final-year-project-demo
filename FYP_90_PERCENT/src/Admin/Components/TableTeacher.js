import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';



const Teacher = props => (
  <tr>
    <td>{props.teacher.firstname}</td>
    <td>{props.teacher.lastname}</td>
    <td>{props.teacher.email}</td>
    <td>{props.teacher.qualification}</td>
    <td>{props.teacher.department}</td>
    <td>
      {/* <Link to={"/edit/"+props.student._id}>edit</Link> | <a href="#" onClick={() => { props.deleteStudent(props.student._id) }}>delete</a> */}
      <Link to={"/edit/" + props.teacher._id}></Link>  <a href="#" onClick={() => { props.deleteTeacher(props.teacher._id) }}>delete</a>

    </td>
  </tr>
)
export default class TableTeacher extends Component {

  constructor(props) {
    super(props);

    this.deleteTeacher = this.deleteTeacher.bind(this)

    this.state = { teachers: [] };
  }

  //sb students show krwaye ga, students ki array bana raha ha
  componentDidMount() {
    axios.post('http://localhost:5000/participant/getteachers',{classid:this.props.classid})
      .then(response => {
        this.setState({ teachers: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTeacher(id) {
    console.log(id);
    axios.delete('http://localhost:5000/participant/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      teachers: this.state.teachers.filter(el => el._id !== id)
    })
  }

  teacherList() {
    return this.state.teachers.map(currentteacher => {
      return <Teacher teacher={currentteacher} deleteTeacher={this.deleteTeacher} key={currentteacher._id} />;
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
                LastName
                        </th>
              <th>
                Emial
                        </th>
              <th>
                Qualification
                        </th>
              <th>
                Department
                        </th>
              
              <th>
                Action
                        </th>
              {/* <th>
              <i class="material-icons">delete</i>
            </th> */}

            </tr>
          </thead>


          <tbody>
            {this.teacherList()}
          </tbody>

         



        </table>
      </div>
    )
  }
}
