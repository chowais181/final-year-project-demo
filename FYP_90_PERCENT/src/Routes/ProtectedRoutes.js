import React from 'react'
import { Redirect } from 'react-router-dom'
import jwt from "jsonwebtoken";

class ProtectedRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      isAuthenticated: false,
    }
    this.checkAuthenticated();
  }

  render() {
    const Component = this.props.component;
    console.log(this.state.isAuthenticated)
    return this.state.isAuthenticated ? (
      <Component />
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
          this.setState({ token: null, isAuthenticated: false });
        } else {
          console.log(decoded);
          sessionStorage.setItem("email", decoded.userdetails.username);
          this.state.isAuthenticated = true;
        }
      });
    }

  }
}

export default ProtectedRoute;