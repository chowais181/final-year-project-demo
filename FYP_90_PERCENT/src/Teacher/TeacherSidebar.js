import React from 'react'
import { Link } from 'react-router-dom';



export default function TeacherSidebar() {
    return (
        <div>
           <div class="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
       
           <div class="logo" ><Link  to="/teacherdashboard" style={{fontWeight:'bold',marginTop:'3px', fontSize:'36px'}}>
          EduTech 
         </Link></div>
       <div class="sidebar-wrapper">
         <ul class="nav">
           <li class="nav-item active  ">
             <Link class="nav-link" to="/teacherdashboard">
               <i class="material-icons">dashboard</i>
               <p>Teacher Dashboard</p>
             </Link>
           </li>
           <li class="nav-item ">
             <Link class="nav-link" to="/createclassbyteacher">
               <i class="material-icons">add_circle</i>
               <p>Create Class </p>
             </Link>
           </li>
           <li class="nav-item ">
             <Link class="nav-link" to="/managestubyteacher">
               <i class="material-icons">groups</i>
               <p>Manage Students</p>
             </Link>
           </li>
           <li class="nav-item ">
             <Link class="nav-link" to="/createsubgroupbyteacher" >
               <i class="material-icons">group_add</i>
               <p>Create Subgroup</p>
             </Link>
           </li>
           {/* <li class="nav-item ">
             <Link class="nav-link" to="/createxambyteacher" >
               <i class="material-icons">add_task</i>
               <p>Create Exam</p>
             </Link>
           </li>

           <li class="nav-item ">
             <Link class="nav-link"  to="/creatquizbyteacher" >
               <i class="material-icons">add_task</i>
               <p> Create Quiz </p>
             </Link>
           </li>
           <li class="nav-item ">
             <Link class="nav-link" to="/creatassignmentbyteacher" >
               <i class="material-icons">add_task</i>
               <p>Create Assignment</p>
             </Link>
           </li> */}
           <li class="nav-item ">
             <Link class="nav-link" to="/uploadassessmentbyteacher">
               <i class="material-icons">done</i>
               <p>Upload Evaluation </p>
             </Link>
           </li>
           
        
           
         
           
         </ul>
       </div>
 
     </div>
          </div>
    )
}
