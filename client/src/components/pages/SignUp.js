import React, { useState } from "react";
import Navbar from "../Navbar.js"
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";

function SignUp() {
  const [firstName, setFirstName] = useState();
  const [middleName, setMiddleName] = useState();
  const [lastName, setLastName] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  // Does a post to the signup route. If successful, we are redirected to the browse-game page
  // Otherwise we log any errors
  function signUpUser(e) {
    e.preventDefault();
    const bodyObj = {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: password
    }
    console.log(bodyObj);
    axios.post("/api/signup", bodyObj)
      .then(res => {
        console.log(res);
        if (!res.data.errmsg) {
          console.log("success");
          history.push("/");
        } else {
          console.log("ERR");
        }
      })
      .catch(err => {
        console.log("Signup Error: ");
        console.log(err);
      })
  }

  return (
    <div>
      <Navbar />
      <div className="loginCard">
        <div className="container">
        <div className="row">
            <div>
              <input
                className="form-control mb-2"
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div>
              <input
                className="form-control mb-2"
                type="text"
                placeholder="Middle Name"
                name="middleName"
                onChange={e => setMiddleName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div>
              <input
                className="form-control mb-2"
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={e => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div>
              <input
                className="form-control mb-2"
                type="text"
                placeholder="Username"
                name="userName"
                onChange={e => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div>
              <input
                className="form-control mb-2"
                type="text"
                placeholder="Email"
                name="email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div>
              <input
                className="form-control mb-2"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => { setPassword(e.target.value) }}
              />
            </div>
          </div>
          <div className="row">
            <button onClick={signUpUser} className="btn btn-outline-dark site-button mb-2" type="submit">
              Submit
          </button>
          </div>
          <div className="row">
            <p className="black-headings mr-1">Already a member?</p> <Link className="link-text" to="/">Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SignUp;