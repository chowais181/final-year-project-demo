import React from 'react'
import { Redirect,Route } from 'react-router-dom'
import jwt from "jsonwebtoken";

class ProtectedRouteTeacher extends React.Component {
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
        <Route>
          <Component {...rest} />
        </Route>
      
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
          if (decoded.userdetails.designation=="teacher"){
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

export default ProtectedRouteTeacher;