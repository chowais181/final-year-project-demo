import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import ModalofAddQuiz from './ModalofAddQuiz';
import ModalofAddObjQuiz from './ModalofAddObjQuiz';
import ModalofAddAssignment from './ModalofAddAssignment';
import ModalofAddExam from './ModalofAddExam';
import QuizTable from './QuizTable';
import AssignmentTable from './AssignmentTable';
import ExamTable from './ExamTable';


export default function Classactivity(){
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow0, setModalShow0] = React.useState(false);
        return (
           
            <div>
                    <div class="content">
                                <div class="container-fluid">
                                        <div class="row mt-4">
                                                    <div class="col-lg-12 col-md-12 col-sm-6" style={{'justify-content':'left','align-items':'left'}}>   
                                                    <button class="btn btn-primary btn-round" onClick={() => setModalShow(true)}>
                                                        <i class="material-icons">add</i> Add Subjective Quiz
                                                    </button>
                                                    {"     "}
                                                    <button class="btn btn-primary btn-round" onClick={() => setModalShow0(true)}>
                                                        <i class="material-icons">add</i> Add Objective Quiz
                                                    </button>
                                                    <ModalofAddQuiz
                                                        show={modalShow}
                                                        onHide={() => setModalShow(false)}
                                                        classid={"123hh"}
                                                        username={"m.haris"}
                                                        />
                                                        <ModalofAddObjQuiz
                                                        show={modalShow0}
                                                        onHide={() => setModalShow0(false)}
                                                        classid={"123hh"}
                                                        username={"m.haris"}
                                                        />                              
                                                </div>
                                          </div>

                        <div class="row mt-4">
                              <div class="col-lg-12 col-md-12 col-sm-6" style={{'justify-content':'left','align-items':'left'}}>  
                              <QuizTable />
                         </div>

                                   
 
                                    </div>


                            </div> 
                    </div>
            </div>
        )
    }


