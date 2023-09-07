import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';

function Signup() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="d-flex flex-column align-items-center justify-content-center vh-100">
                    <div className=" rounded rounded-5 p-5 bg-primary">
                        <h1 className="text-center mb-4 text-light">Sign Up</h1>
                        <form className="d-flex flex-column">
                            <div className="row g-3 align-self-end mt-1 ">
                                <div className="col-auto">
                                    <label forName="fname" className="col-form-label text-light">First Name</label>
                                </div>
                                <div className="col-auto">
                                    <input type="text" id="fname" className="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                            </div>
                            <div className="row g-3 align-self-end mt-1">
                                <div className="col-auto">
                                    <label forName="lname" className="col-form-label text-light">Last Name</label>
                                </div>
                                <div className="col-auto">
                                    <input type="text" id="lname" className="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                            </div>
                            <div className="row g-3 align-self-end mt-1">
                                <div className="col-auto">
                                    <label forName="email" className="col-form-label text-light">Email</label>
                                </div>
                                <div className="col-auto">
                                    <input type="email" id="email" className="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                            </div>
                            <div className="row g-3 align-self-end mt-1">
                                <div className="col-auto">
                                    <label forName="username" className="col-form-label text-light">Username</label>
                                </div>
                                <div className="col-auto">
                                    <input type="text" id="username" className="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                            </div>
                            <div className="row g-3 align-self-end mt-1">
                                <div className="col-auto">
                                    <label forName="password" className="col-form-label text-light">Password</label>
                                </div>
                                <div className="col-auto">
                                    <input type="password" id="password" className="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                            </div>
                            <div className="row g-3 align-self-center mt-1 ">
                                <button type="submit" className="btn btn-info text-dark">Secondary</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )

}

export default Signup;