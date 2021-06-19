import React from 'react'
import { Redirect } from 'react-router-dom'
import jwt from "jsonwebtoken";

class ProtectedRouteLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      designation:"",
      isAuthenticated: false,
    }
    this.checkAuthenticated();
  }

  render() {
    const Component = this.props.component;
    console.log(this.state.isAuthenticated)
    if(this.state.isAuthenticated){
    if (this.state.designation=="admin") {
        return <Redirect to='/admindashboard'/>;
      }
      else if(this.state.designation=="student") {
          return <Redirect to='/studentdashboard'/>;
        }
        else if(this.state.designation=="teacher") {
          return <Redirect to='/teacherdashboard'/>;
        }
    }
    else{
        return <Component />
    }
  }
  checkAuthenticated() {
    console.log("i am authenticsing ")
    const jwt_secret =
      "edutechsupersecret";
    let jwt_token = localStorage.getItem("token");
    
    if (jwt_token) {
      console.log(jwt_token)
      jwt.verify(jwt_token, jwt_secret, (err, decoded) => {
        if (err) {
          localStorage.removeItem("token");
          console.log("Not Done");
          this.setState({ token: null, isAuthenticated: false });
        } else {
          console.log('decoded is :' + decoded);
          console.log('done');
          this.state.designation=decoded.userdetails.designation;
          sessionStorage.setItem("email", decoded.userdetails.username);
          this.state.isAuthenticated = true;
        }
      });
    }

  }
}

export default ProtectedRouteLogin;