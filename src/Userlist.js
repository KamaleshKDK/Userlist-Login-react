import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './usertable.css'
function Userlist() {
    const [userList, setUserList] = useState([])
    useEffect(async () => {
        fetchUsers()
    }, [])

    let fetchUsers = async () => {
        try {
            let userData = await axios.get("https://basic-user-login-form-node.herokuapp.com/user");
            setUserList(userData.data)
        } catch (error) {
            console.log(error)
        }
    }

    let handleDelete = async (id) => {
        try {
            let result = window.confirm("Are you sure Do want to Delete?")
            if (result) {
                await axios.delete(`https://basic-user-login-form-node.herokuapp.com/user/${id}`)
                fetchUsers()
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className='row'>
                <div className='col-lg-6'>
                    <h3>User list</h3>
                </div>
                <div className='col-lg-6 text-end'>
                    <Link to="/create">
                        <button className='btn btn-primary'>Create User</button>
                    </Link>
                </div>
            </div>
            <table class="table table-hover">
                <thead>
                    <tr>
                       
                        <th>Name</th>
                        <th>Age</th>
                        <th>E-mail</th>
                        <th>Action</th>
                    </tr>


                </thead>

                <tbody>
                    {
                        userList.map((user) => {
                            return <tr>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/user-edit/${user._id}`}>
                                        <button className='edit-btn  btn btn-sm btn-primary'>Edit</button>
                                    </Link>
                                    <button onClick={() => handleDelete(user._id)} className='delete-btn btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        })
                    }

                </tbody>
            </table>


        </>
    )
}

export default Userlist
