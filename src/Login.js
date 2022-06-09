import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import {useNavigate } from "react-router-dom"
import BlogList from "./bloglist"
import "./App.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [users, setusers] = useState(null)
  const [blogs, setblogs] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setusers(data);
      })
  }, [])

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setblogs(data);
      })
  }, [])

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = users.find((user) => user.user === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
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
          <Button type="submit">Log in</Button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="login">
      <div className="login-form">
        <div className="title">Log in</div>
        {isSubmitted ? <BlogList blogs={blogs} uname={username} />:renderForm }
      </div>
    </div>
  );
}

export default Login;
