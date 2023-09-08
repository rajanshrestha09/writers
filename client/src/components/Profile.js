import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: ''
  })
  console.log(user)
  useEffect(() => {
    const checked = async () => {
      const response = await axios.get('http://localhost:8080/profile', { headers: { 'content-type': 'application/json' }, withCredentials: true })
      // console.log(response.data)
      if (response.data.status === 200) {
        const user_details = response.data.user
        // console.log(user_details)
        setUser({
          firstname: user_details.firstname,
          lastname: user_details.lastname,
          email: user_details.email
        })

        navigate('/profile')
      }
      if (response.data.status === 400) {
        navigate('/login')
      }
    }
    checked()
  }, [])

  return (
    <>
      <div>Profile</div>
      <h1>{user.firstname}</h1>
      <h1>{user.lastname}</h1>
      <h1>{user.email}</h1>
      
    </>


  )
}

export default Profile