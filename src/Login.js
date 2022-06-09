import { useState } from "react"
import { Button } from "react-bootstrap"
import {useNavigate, Link } from "react-router-dom"
import useFetch from "./usefetch";
import "./App.css";

export default function Login() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate()
  const { data: users } = useFetch('http://localhost:8000/users')
  const[user, setuser]  = useState("")
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    const userData = users.find((user) => user.user === uname.value)

    if (userData) {
      if (userData.password !== pass.value) {

        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        setuser(userData.user);
      }
    } else {

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
          <input type="username" name="uname" required />
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
        {isSubmitted ? <div><div>User is successfully logged in.</div><Link to={`/bloglist/${user}`}><Button>Continue</Button></Link></div>:renderForm }
        
      </div>
    </div>
  );
}

