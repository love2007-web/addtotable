import React from 'react'
import { Link } from 'react-router-dom';
import { json } from 'react-router-dom'

const Users = () => {
    let User = JSON.parse(localStorage.getItem("Users"));
    console.log(User);
  return (
    <>
        <table>
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </thead>
            <tbody>
                <tr>
                    <td>{User.firstname}</td>
                    <td>{User.lastname}</td>
                    <td>{User.Email}</td>
                </tr>
            </tbody>
        </table>
        
        <a href=""><button className='bg-blue-500 px-3 py-4 rounded-2xl text-center'><Link to={'/'}>Back to sign up</Link></button></a>
    </>
  )
}

export default Users