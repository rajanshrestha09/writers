import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const nav = () => {
      navigate('/login')
    }
    nav()
  }, [])
}

export default Home