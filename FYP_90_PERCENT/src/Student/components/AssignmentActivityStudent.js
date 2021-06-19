import React from 'react';
import AssignmentTable from './../../Teacher/components/AssignmentTable';


export default function Assignmentactivity() {
    const [modalShow1, setModalShow1] = React.useState(false);

    return (

        <div>
            <div class="content">
                <div class="container-fluid">
                    <div class="row mt-4">
                        <div class="col-lg-12 col-md-12 col-sm-6" style={{ 'justify-content': 'left', 'align-items': 'left' }}>
                            <AssignmentTable />
                        </div>



                    </div>


                </div>
            </div>
        </div>
    )
}


