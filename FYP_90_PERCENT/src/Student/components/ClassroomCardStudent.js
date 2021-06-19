import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ClassroomCardStudent extends Component {
    render() {
        return (
            <div class="col-lg-4 col-md-4 col-sm-6">
                  <div class="card card-stats"  style={{height:'325px', width:'325px'}}>
                          <div class="card-header card-header-success card-header-icon">
                            <div class="card-icon" style={{width:'100px'}}>
                              <i class="material-icons"><h3>{this.props.section}</h3></i>
                            </div>
                            <p class="card-category">{this.props.course_code}</p>
                            <h3 class="card-title">{this.props.course_name}</h3>
                          </div>
                          
                          <div class="card-footer">
                            <div class="stats">
                              <i class="material-icons">date_range</i> 
                              <Link to={'/classdetailsstudent/'+this.props.classcode}>
                              <img src="https://image.shutterstock.com/z/stock-vector-vector-illustration-business-man-study-in-online-course-the-mentor-explain-in-online-class-computer-1496233118.jpg"
                              style={{height:'160px', width:'283px'}}
                              alt="classroom_image"/>
                              </Link>
                            </div>
                          </div>
                    </div>
               </div>
        )
    }

}