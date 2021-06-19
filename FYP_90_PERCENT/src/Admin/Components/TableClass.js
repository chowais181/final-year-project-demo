import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';



const Classess = props => (
  <tr>
    <td>{props.classess.classid}</td>
    <td>{props.classess.coursecode}</td>
    <td>{props.classess.classname}</td>
    <td>{props.classess.section}</td>

    <td>
      {/* <Link to={"/edit/"+props.student._id}>edit</Link> | <a href="#" onClick={() => { props.deleteStudent(props.student._id) }}>delete</a> */}
      <Link to={"/edit/" + props.classess._id}></Link>  <a href="#" onClick={() => { props.deleteClassess(props.classess._id) }}>delete</a>

    </td>
  </tr>
)
export default class TableClass extends Component {

  constructor(props) {
    super(props);

    this.deleteClassess = this.deleteClassess.bind(this)

    this.state = { classess: [] };
  }

  //sb classess show krwaye ga, classess ki array bana raha ha
  componentDidMount() {
    axios.get('http://localhost:5000/classrooms/')
      .then(response => {
        this.setState({ classess: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteClassess(id) {
    axios.delete('http://localhost:5000/classrooms/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      classess: this.state.classess.filter(el => el._id !== id)
    })
  }

  classessList() {
    return this.state.classess.map(currentclassess => {
      return <Classess classess={currentclassess} deleteClassess={this.deleteClassess} key={currentclassess._id} />;
    })
  }


  render() {
    return (
      <div>
        <table class="table">
          <thead class=" text-primary">
            <tr>

              <th>
                Class ID
                        </th>
              <th>
                Course Code
                        </th>
              <th>
                Class Name
                        </th>
              <th>
                Section
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
            {this.classessList()}
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
