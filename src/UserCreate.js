import React from 'react';
import { useFormik } from 'formik'
import axios from "axios";
import { useNavigate } from 'react-router-dom'



function UserCreate() {
    const navigate = useNavigate(); 
    const formik = useFormik({
        initialValues: {
          email: '',
          name : '',
          age : 0,
          phonenumber : ''
        },
        onSubmit: async (values) => {
        try {
           await axios.post("https://basic-user-login-form-node.herokuapp.com/create-user",values)
            navigate("/thanks")
        } catch (error) {
            console.log(error)
        }
        },
      });

    return (
        <div className='row'>
            <form onSubmit={formik.handleSubmit}>
                <div className="col-lg-6">
                    <label>Name</label>
                    <input type="text" name ="name" className='form-control' 
                       onChange={formik.handleChange}
                       value={formik.values.name} required/>
                </div>
                <div className="col-lg-6">
                    <label>Age</label>
                    <input type="number" name ="age" className='form-control' 
                       onChange={formik.handleChange}
                       value={formik.values.age} required/>
                </div>
                <div className="col-lg-6">
                    <label>Email</label>
                    <input type="email" name="email" className='form-control' 
                       onChange={formik.handleChange}
                       value={formik.values.email} required/>
                </div>
                <div className="col-lg-6">
                    <label>Phone Number</label>
                    <input type="number" name="phonenumber" className='form-control' 
                       onChange={formik.handleChange}
                       value={formik.values.phonenumber} required/>
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default UserCreate
