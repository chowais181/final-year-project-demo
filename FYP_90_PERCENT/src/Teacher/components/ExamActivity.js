import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import ModalofAddQuiz from './ModalofAddQuiz';
import ModalofAddAssignment from './ModalofAddAssignment';
import ModalofAddExam from './ModalofAddExam';
import QuizTable from './QuizTable';
import AssignmentTable from './AssignmentTable';
import ExamTable from './ExamTable';


export default function ExamActivity(){
    const [modalShow2, setModalShow2] = React.useState(false);
 
        return (
           
            <div>
                    <div class="content">
                                <div class="container-fluid">
                                        <div class="row mt-4">
                                                    <div class="col-lg-12 col-md-12 col-sm-6" style={{'justify-content':'left','align-items':'left'}}>   
                                                    <button class="btn btn-primary btn-round" onClick={() => setModalShow2(true)}>
                                                        <i class="material-icons">add</i> Add Exam
                                                    </button>
                                                    <ModalofAddExam
                                                        show={modalShow2}
                                                        onHide={() => setModalShow2(false)}
                                                        classid={"123hh"}
                                                        username={"m.haris"}
                                                        />                              
                                                </div>
                                               

                                                
                                            
                                    </div>


                                  

                                    <div class="row mt-4">
                                    <div class="col-lg-12 col-md-12 col-sm-6" style={{'justify-content':'left','align-items':'left'}}>  
                                    <ExamTable />
                                    </div>

                                   
 
                                    </div>


                            </div> 
                    </div>
            </div>
        )
    }


