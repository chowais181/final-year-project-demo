import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';

export default function AdminLogin() {
    const [redirect, setRedirect] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errPassword, seterrPassword] = useState("");
    const [errEmail, seterrEmail] = useState("");


    const   validate = () => {
      let emailErr="";
      let passErr="";

      if(!email){
        emailErr="Email is Required !" 
      }
      if(!password){
        passErr="Password is Required !";
      }

      if(emailErr || passErr ){
        seterrEmail(emailErr);
        seterrPassword(passErr);
        return false
      }
      return true;
    }
    const submitForm = (e) => {
        e.preventDefault();
        const isvalid = validate();
        Axios.post('http://localhost:5000/users/login', { username: email, password: password })
        .then(data => {
            console.log(data);
            if (data.status == 200) {
                console.log(data);
               localStorage.setItem("token",data.data.token);
                setRedirect(data.data.designation);
                console.log(redirect)
            }
                })
                .catch(err => {
                    console.log('error', err);
                })
    }
     if (redirect=="admin") {
      return <Redirect to='/admindashboard'/>;
    }
    else if(redirect=="student") {
        return <Redirect to='/studentdashboard'/>;
      }
      else if(redirect=="teacher") {
        return <Redirect to='/teacherdashboard'/>;
      }
      else
    return (
        <div>
            <div className="row">
                <div className="col-md-5 p-5">
                    <img src="https://i.ibb.co/LncvYsG/edu-tech-1.jpg" style={{ height: '25%', width: '29%' }} alt="my image " />

                    <h2 className="name animated bounceIn">  Login  </h2>
                    <br></br>
                    <div className="card text-center">
                        <div className="card-body ">
                            <form className="text-center"
                             style={{ color: '#757575' }}
                              method="POST"
                               onSubmit={submitForm}>
                                <div className="md-form mt-3">
                               
                                    <input type="text" value={email} className="form-control" onChange={(e) => setEmail(e.target.value)} />
                                    <label for="">Email</label>
                                    {errEmail ? <p style={{color:'red'}}>{errEmail}</p>:''}
                                   
                                </div>

                                <div className="md-form mt-3">
                               
                                    <input type="password" value={password} className="form-control" onChange={(e) => setPassword(e.target.value)} />
                                    <label for="">Password</label>
                                    {errPassword ? <p style={{color:'red'}}>{errPassword }</p>:''}
                                </div>
                                <Link to="#" className="btn btn-info btn-rounded" onClick={submitForm}
                                    style={{ fontWeight: 'bold' }} type="submit" >Sign in</Link>

                            </form>

                        </div>

                    </div>

                </div>

                <div className="col-md-7">
                    < img src="https://miro.medium.com/max/994/1*jwA-xx-16cVLVsxPNeJSkg.jpeg" />
                </div>
            </div>

        </div>


    )
}
