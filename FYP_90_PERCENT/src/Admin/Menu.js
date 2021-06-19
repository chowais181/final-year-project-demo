import React from 'react'
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div>
             
               <div class="container-fluid">
                    <div class="row m-5">
                    <div className="col-md-2"></div>
                        <div className="col-md-5 mt-5">
                            <h3 style={{fontWeight:'bold', marginTop:'20px'}}>Welcome  </h3>
                            <img class="mt-3" src="https://i.ibb.co/LncvYsG/edu-tech-1.jpg" style={{height:'50%', width:'40%'}}  />
                        </div>
                     <div className="col-md-3 mt-5" style={{marginTop:'50px;'}}> 
                        
                        <Link class="nav-link" to="/loginadmin">
                           <button style={{fontWeight:'bold'}} type="button" class="btn btn-lg btn-primary" >Login as  Admin</button>
                           </Link>
                       
                        <Link class="nav-link" to="/loginteacher">
                           <button style={{fontWeight:'bold'}} type="button" class="btn btn-lg btn-primary" >Login as Teacher</button>
                           </Link>
                         
                         <Link class="nav-link" to="/loginstudent">
                           <button style={{fontWeight:'bold'}}type="button" class="btn btn-lg btn-primary" >Login as Student</button>
                           </Link>
                     
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    
            
                </div>
        </div>
        
        
    )

}
