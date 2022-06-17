import React, { useState } from "react";
import ReactDOM from "react-dom";
import Page1 from "./Page1";
import "./style.css";
import Footer from "./Footer";
import { BrowserRouter } from 'react-router-dom';
// import { Router, useNavigate } from "react-router-dom";

import {Link, Route, Router, useNavigate} from 'react-router-dom';


function App() {
     const navigate= useNavigate();
  //   <Router>
  //  <Route path="/Page1" component={Page1} />   
  // </Router>

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        // navigate('Page1');
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")} 
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          {/* <Router> */}
          <input type="submit" />
          {/* <Link to="/a">Page1</Link>
          </Router> */}
        </div>
      </form>
     
    </div>
  
  );

  return (
    <div>
    <div className="app">
      <div className="logo" >
      <img src="logo.png" height="100px" width="100px" />
      </div>
      <div className="login-form">
        <div className="title">Sign In</div>
        {/* {isSubmitted ? <div><Page1/></div> : renderForm} */}
       
        {isSubmitted ? navigate('/Page1')  : renderForm}

      
      </div>
      <Footer/>
     </div>
     
     </div>
  );
}

export default (App);