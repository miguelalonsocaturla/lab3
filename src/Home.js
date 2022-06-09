import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'




export default function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="content" style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                <h1>Welcome to your Blog Aplication</h1>
            </div><br></br>
            <div >
                <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                    <Button onClick={() => navigate('/login')}>Log in</Button>
                </div>
                <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                    <h3>or</h3>
                </div>
                <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                    <Button onClick={() => navigate('/register')}>Create an account</Button>
                </div>
            </div>
        </div>
    )
  }
  