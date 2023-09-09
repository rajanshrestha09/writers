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
      const response = await axios.get('http://localhost:8080/profile', { headers: { 'content-type': 'application/json' }, withCredentials: true });
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

  const handlelogout = async (event) => {
    try {
      event.preventDefault()
      console.log('Here')
      const response = await axios.get('http://localhost:8080/logout', { headers: { 'content-type': 'application/json' }, withCredentials: true });
      console.log('here 2')
      console.log(response.data);
      navigate('/login')


    } catch (error) {
      console.log('Login failed', error.message);
    }
  }

  return (
    <>
      <div>Profile</div>
      <h1>First Name: {user.firstname} </h1>
      <h1>Last Name: {user.lastname}</h1>
      <h1>Email: {user.email}</h1>

      <button type="button" className="btn btn-primary ms-5" onClick={handlelogout}>Logout</button>
    </>


  )
}

export default Profile