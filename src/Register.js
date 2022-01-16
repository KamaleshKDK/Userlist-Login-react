import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css';

function Register() {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            name : ''
        },
        onSubmit: async (values) => {
            try {
                await axios.post("http://localhost:3000/register", values)
              
                navigate("/")
            } catch (error) {
                console.log(error)
            }
        },
    });

    return (
        <div className='row'>
                <h2 style={{"text-align" : "center"}}>REGISTRATION FORM</h2>

        <div className='col-lg-6'>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-outline mb-4">
                    <label className="form-label">Name</label>
                    <input type="text" name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name} className="form-control"  required/>
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label">E-mail</label>
                    <input type="email" name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email} className="form-control"  required/>
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label">Password</label>
                    <input type="password" name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password} className="form-control"  required/>
                </div>
                <input className="register-btn btn btn-primary btn-block" type="submit" />
            </form>
        </div>
    </div>
       
    )
}

export default Register
