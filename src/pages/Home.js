import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


export default function Home() {
    const navigate = useNavigate()
    return (
        <div className="content">
            <div className="content" style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                <h1>Welcome to your Blog Aplication</h1>
            </div>
            <div className="content" class="row" style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                <Button onClick={navigate('/login')}>Log in</Button>
                <h3>or</h3>
                <Button onClick={navigate('/register')}>Create an account</Button>
            </div>
        </div>
    )
  }
  