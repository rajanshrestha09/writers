import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })

    useEffect(() => {
        const checked = async () => {
            const response = await axios.get('https://writers-8a41.onrender.com/login', { headers: { 'content-type': 'application/json' }, withCredentials: true })
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

    function handleChange(event) {
        const { name, value } = event.target;
        console.log(value)
        setLogin(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }



    async function onsubmit(event) {
        try {
            event.preventDefault()
            console.log('Here')
            const response = await axios.post('https://writers-8a41.onrender.com/login', login,
                { headers: { 'content-type': 'application/json' }, withCredentials: true });
            console.log(response.data);
            if (response.data.status === 200) {
                navigate('/profile')
            }

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
                        <h1 className="text-center mb-4 text-light">Log In</h1>
                        <form className="d-flex flex-column" onSubmit={onsubmit}>
                            <div className="row g-3 align-self-end mt-1">
                                <div className="col-auto">
                                    <label forname="username" className="col-form-label text-light">Username</label>
                                </div>
                                <div className="col-auto">
                                    <input type="text" name="username" id="username" value={login.username} onChange={handleChange} className="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                            </div>
                            <div className="row g-3 align-self-end mt-1">
                                <div className="col-auto">
                                    <label forname="password" className="col-form-label text-light">Password</label>
                                </div>
                                <div className="col-auto">
                                    <input type="password" name="password" id="password" value={login.password} onChange={handleChange} className="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                            </div>
                            <div className="row g-3 align-self-center mt-1 ">
                                <button type="submit" className="btn btn-info text-dark">Login</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )

}

export default Login;
