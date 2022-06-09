import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"




export default function Login() {
  const [username, setusername]= useState("")
  const [password, setpassword]= useState("")
  const [users, setusers] = useState(null)
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


  function log()
  {
    {users.map((User) => {
      if (User.user === username) {
        if (User.password === password) {
          //aqui llamaria a la funcion de blog list con el user y me mostraria los blogs es un poco chusta pero bueno 
          {blogs && <BlogList blogs={blogs} user={username} />}
        }
      }
      <div><h1>Username or password incorrect.</h1><br></br><Button onClick={Login}>Try again.</Button></div>
    })}
     

    
  }
  return (
    <div>
      <div  style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}} >
        <label>Username/User ID:</label>
        <input name="username" onChange={(e) => setusername(e.target.value)} value={username} />
      </div><br></br>
      <div  style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}} >
        <label>Password:</label>
        <input type="password" name="password" onChange={(e) => setpassword(e.target.value)} value={password} />
      </div>
      <br></br><br></br>
      <div  style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
        <Button onClick={navigate('/bloglist')}>
          Login 
        </Button>
      </div>
    </div> 
  )
}

