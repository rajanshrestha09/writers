import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'

const Profile = () => {
  axios.get('http://localhost:8080/signup');
  return (
    <div>Profile</div>
  )
}

export default Profile