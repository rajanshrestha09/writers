import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const Home = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate('/login')
  },[])
}

export default Home