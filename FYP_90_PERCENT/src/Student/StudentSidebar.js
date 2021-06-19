import React from 'react'
import { Link } from 'react-router-dom';



export default function StudentSidebar() {
    return (
        <div>
         <div class="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
         <div class="logo" ><a href="http://www.creative-tim.com" class="simple-text logo-normal" style={{fontWeight:'bold'}}>
          Edu Tech 
         </a></div>
       <div class="sidebar-wrapper">
         <ul class="nav">
           <li class="nav-item active  ">
             <Link class="nav-link" to="/admindashboard">
               <i class="material-icons">dashboard</i>
               <p>Dashboard</p>
             </Link>
           </li>
           <li class="nav-item ">
             <Link class="nav-link" to="/joinclassbystu">
               <i class="material-icons">add_circle</i>
               <p>Join Class </p>
             </Link>
           </li>
           <li class="nav-item ">
             <Link class="nav-link" to="/attemptassignmentbystu">
               <i class="material-icons">upload</i>
               <p>Upload Assignment</p>
             </Link>
           </li>
           <li class="nav-item ">
             <Link class="nav-link" to="/attemptquizbystu" >
               <i class="material-icons">upload</i>
               <p>Upload Quiz</p>
             </Link>
           </li>
           <li class="nav-item ">
             <Link class="nav-link" to="/attemptexambystu">
               <i class="material-icons">upload</i>
               <p>Upload Exam</p>
             </Link>
           </li>

          
           
           
         
           
         </ul>
       </div>
 
     </div>
          </div>
    )
}
