import React, {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import {useNavigate} from 'react-router-dom';


const Profile = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const checked = async () => {
        const response = await axios.get('http://localhost:8080/profile', { headers: { 'content-type': 'application/json' }, withCredentials: true })
        console.log(response.data)
        if (response.data.status === 200) {
            navigate('/profile')
        }
        if (response.data.status === 400) {
            navigate('/login')
        }
    }
    checked()
}, [])

  return (
    <div>Profile</div>
  )
}

export default Profile