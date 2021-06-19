import React from 'react'
// import QuizTable from '../../Teacher/components/QuizTable';
import QuizTable from './QuizTable';


export default function Classactivity(){
    const [modalShow, setModalShow] = React.useState(false);
 
        return (
           
            <div>
                    <div class="content">
                                <div class="container-fluid">
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


