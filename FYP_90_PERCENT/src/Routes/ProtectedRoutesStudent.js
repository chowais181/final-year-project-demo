import React from 'react'
import { Redirect } from 'react-router-dom'
import jwt from "jsonwebtoken";


class ProtectedRouteStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      isAuthenticated: false,
    }
    this.checkAuthenticated();
  }

  render() {
    const { component: Component, ...rest } = this.props;
    return this.state.isAuthenticated ? (
      <Component {...rest}/>
    ) : (
      <Redirect to={{ pathname: '/' }} />
    );
  }
  checkAuthenticated() {
    const jwt_secret =
      "edutechsupersecret";
    let jwt_token = localStorage.getItem("token");
    if (jwt_token) {
      jwt.verify(jwt_token, jwt_secret, (err, decoded) => {
        if (err) {
          localStorage.removeItem("token");
          console.log("Not Done");
          this.state.isAuthenticated = false;
        } else {
          console.log(decoded);
          if (decoded.userdetails.designation=="student"){
          sessionStorage.setItem("email", decoded.userdetails.username);
          this.state.isAuthenticated = true;
          }
          else{
            this.state.isAuthenticated = false;
          }
        }
      });
    }

  }
}

export default ProtectedRouteStudent;