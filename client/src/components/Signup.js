import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
function Signup() {
    const navigate = useNavigate();
    const [signup, setSignup] = useState({
        fname: "",
        lname: "",
        email: "",
        username: "",
        password: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;
        console.log(value)
        setSignup(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    async function onsubmit(event) {
        event.preventDefault()
        console.log('Here')
        const response = await axios.post('http://localhost:8080/signup', signup,
            { headers: { 'content-type': 'application/x-www-form-urlencoded' } });
        console.log(response)
        navigate('/login')

    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="d-flex flex-column align-items-center justify-content-center vh-100">
                    <div className=" rounded rounded-5 p-5 bg-primary">
                        <h1 className="text-center mb-4 text-light">Sign Up</h1>
                        <form className="d-flex flex-column" onSubmit={onsubmit}>
                            <div className="row g-3 align-self-end mt-1 ">
                                <div className="col-auto">
                                    <label forName="fname" className="col-form-label text-light">First Name</label>
                                </div>
                                <div className="col-auto">
                                    <input type="text" name="fname" id="fname" value={signup.fname} onChange={handleChange} className="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                            </div>
                            <div className="row g-3 align-self-end mt-1">
                                <div className="col-auto">
                                    <label forName="lname" className="col-form-label text-light">Last Name</label>
                                </div>
                                <div className="col-auto">
                                    <input type="text" name="lname" id="lname" value={signup.lname} onChange={handleChange} className="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                            </div>
                            <div className="row g-3 align-self-end mt-1">
                                <div className="col-auto">
                                    <label forName="email" className="col-form-label text-light">Email</label>
                                </div>
                                <div className="col-auto">
                                    <input type="email" name="email" id="email" value={signup.email} onChange={handleChange} className="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                            </div>
                            <div className="row g-3 align-self-end mt-1">
                                <div className="col-auto">
                                    <label forName="username" className="col-form-label text-light">Username</label>
                                </div>
                                <div className="col-auto">
                                    <input type="text" name="username" id="username" value={signup.username} onChange={handleChange} className="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                            </div>
                            <div className="row g-3 align-self-end mt-1">
                                <div className="col-auto">
                                    <label forName="password" className="col-form-label text-light">Password</label>
                                </div>
                                <div className="col-auto">
                                    <input type="password" name="password" id="password" value={signup.password} onChange={handleChange} className="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                            </div>
                            <div className="row g-3 align-self-center mt-1 ">
                                <button type="submit" className="btn btn-info text-dark">Sign Up</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )

}

export default Signup;