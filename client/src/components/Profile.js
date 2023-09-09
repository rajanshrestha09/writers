import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Profile(){
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: ''
  })
  // console.log(user)
  useEffect(() => {
    const checked = async () => {
      const response = await axios.get('https://writers-8a41.onrender.com/profile', { headers: { 'content-type': 'application/json' }, withCredentials: true });
      // console.log(response.data)
      if (response.data.status === 200) {
        const user_details = response.data.user
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
      // console.log('Here')
      // const response = 
      await axios.get('https://writers-8a41.onrender.com/logout', { headers: { 'content-type': 'application/json' }, withCredentials: true });
      // console.log(response.data);
      navigate('/login')


    } catch (error) {
      console.log('Login failed', error.message);
    }
  }


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="d-flex flex-column align-items-center justify-content-center vh-100">
          <div className=" rounded rounded-5 p-5 bg-primary">
            <h1 className="text-center mb-4 text-light">Profile</h1>
            <hr className='border border-light border-2 opacity-75'/>
            <div className='shadow-lg rounded-5 text-center p-5 d-flex flex-column align-items-center'>
              <div className="input-group input-group-lg m-2">
                <span className="input-group-text" id="inputGroup-sizing-lg">First Name</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value={user.firstname} disabled />
              </div>
              <div className="input-group input-group-lg m-2">
                <span className="input-group-text" id="inputGroup-sizing-lg">Last Name</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value={user.lastname} disabled />
              </div>
              <div className="input-group input-group-lg m-2">
                <span className="input-group-text" id="inputGroup-sizing-lg">Email</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value={user.email} disabled />
              </div>
              <div className="input-group input-group-lg m-2">
                <button type="button" className="btn btn-success mx-auto me-0 border " onClick={handlelogout}>Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Profile
