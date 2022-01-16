import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UserEdit() {
    let params = useParams();
    useEffect(async () => {
        let userData = await axios.get(`https://basic-user-login-form-node.herokuapp.com/user/${params.id}`)
        formik.setValues(userData.data)
    }, [])

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            name: ''
        },
        onSubmit: async (values) => {
            try {
                delete values._id  
                await axios.put(`https://basic-user-login-form-node.herokuapp.com/user/${params.id}`, values)
                navigate("/user-list")
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
                    <input type="text" name="name" className='form-control'
                        onChange={formik.handleChange}
                        value={formik.values.name} />
                </div>
                <div className="col-lg-6">
                    <label>Age</label>
                    <input type="number" name ="age" className='form-control' 
                       onChange={formik.handleChange}
                       value={formik.values.age}/>
                </div>
                <div className="col-lg-6">
                    <label>Email</label>
                    <input type="email" name="email" className='form-control'
                        onChange={formik.handleChange}
                        value={formik.values.email} />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}
export default UserEdit
