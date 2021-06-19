import React from 'react'
import ExamTable from './../../Teacher/components/ExamTable';


export default function ExamActivity() {
    const [modalShow2, setModalShow2] = React.useState(false);

    return (

        <div>
            <div class="content">
                <div class="container-fluid">
                    <div class="row mt-4">
                        <div class="col-lg-12 col-md-12 col-sm-6" style={{ 'justify-content': 'left', 'align-items': 'left' }}>
                            <ExamTable />
                        </div>



                    </div>


                </div>
            </div>
        </div>
    )
}


