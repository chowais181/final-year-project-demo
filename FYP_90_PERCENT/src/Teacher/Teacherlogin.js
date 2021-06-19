import React , {useState} from 'react';
import { Link } from 'react-router-dom';
 

export default function TeacherLogin() {
 
    
 
    return (
 <div>
 <div className="row">
<div className="col-md-5 p-5">
<img src="https://i.ibb.co/LncvYsG/edu-tech-1.jpg"  style={{height:'25%', width:'29%'}}   alt="my image " />
    
    <h2 style={{fontWeight:'bold', color:'#DA70D6', marginTop:'10px'}}> Teacher Login  </h2>
    <br></br>
    <div class="card text-center">  
    <div class="card-body ">  
        <form     class="text-center" style={{color: '#757575'}}   method="POST">
            <div class="md-form mt-3">
                       <div class="form-group">
                          <label class="bmd-label-floating">Email</label>
                          <input type="text" class="form-control" />
                        </div>
            </div>

            <div class="md-form mt-3">
                           <div class="form-group">
                          <label class="bmd-label-floating" >Password</label>
                          <input type="text" class="form-control" />
                        </div>
            </div>  
            <Link to="/teacherdashboard" >
                <button type="submit" class="mt-3 btn btn-primary pull-center">Sign In </button>
                      </Link>
        </form>
       
    </div>

</div>
 
</div> 

<div className="col-md-7 col-sm-2">
  < img  src="https://miro.medium.com/max/994/1*jwA-xx-16cVLVsxPNeJSkg.jpeg"  />
</div>
</div>

      </div> 
   
       
    )
}
 