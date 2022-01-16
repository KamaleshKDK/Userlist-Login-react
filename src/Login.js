import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './login.css'
function Login() {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                let loginData = await axios.post("http://localhost:3000/login", values)
                window.localStorage.setItem("my_token", loginData.data.token)
                navigate("/user-list")
            } catch (error) {
                console.log(error)
            }
        },
    });

    return (
        <>
            {/* <form onSubmit={formik.handleSubmit}>
                <div className="form-outline mb-4">
                    <input type="email" type="email" name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email} className="form-control" />
                    <label className="form-label">Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" type="password" name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password} className="form-control" />
                    <label className="form-label">Password</label>
                </div>

                <input type="submit" className="btn btn-primary btn-block">Sign in</input>
            </form> */}
                <h2 style={{"text-align" : "center"}}>LOGIN FORM</h2>
            <div className='row'>
                <div className='col-lg-6'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-outline mb-4">
                            <label className="form-label">E-mail</label>
                            <input type="email" name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email} className="form-control" required/>
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label">Password</label>
                            <input type="password" name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password} className="form-control"  required/>
                        </div>
                        <button className="signin-btn btn btn-primary" type="submit" >Sign in</button>
                        <Link to={"/register"}>
                                        <button className='signup-btn btn btn-primary'>Sign up</button>
                                    </Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
