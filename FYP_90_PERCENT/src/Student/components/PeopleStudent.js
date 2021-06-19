import React from 'react'
import TablePeopleClass from '../../Teacher/components/TablePeopleClass';
import TeacherPeople from '../../Teacher/components/TeacherPeople';


export default function People(classid) {

  return (
    <div>



<div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Teacher List </h4>
                  

                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <TablePeopleClass classid={classid} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>




      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Student List </h4>
                  


                  <p class="card-category"> Here is a list of all Students</p>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <TeacherPeople classid={classid} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </div>



  )
}


