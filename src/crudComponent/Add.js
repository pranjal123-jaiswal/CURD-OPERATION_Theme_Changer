import React, { useState } from 'react'
import Employee from './Employee';
import { v4 as uuid } from "uuid";
import {Form, NavLink , useNavigate} from "react-router-dom"
// import { Formik, Form, Field, ErrorMessage } from 'formik'; 

const Add = () => {

    const [name , setName] = useState('')
    const [age , setAge] = useState('')

    let navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      const ids = uuid()
      let uniqueId = ids.slice(0,8)

      let a = name,
       b= age

       Employee.push({id: uniqueId , Name: a , Age: b})

       navigate("/");
    }
  return (
    <div>
       <form className='d-grid gap-2' style={{ margin: '15rem' }} onSubmit={handleSubmit}>
      <div className="mb-3" controlId="formName">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          id="name"
          className="form-control"
          placeholder="Enter Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3" controlId="formAge">
        <label htmlFor="age" className="form-label">Age</label>
        <input
          type="text"
          id="age"
          className="form-control"
          placeholder="Enter Age"
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">Update</button>
    </form>
    </div>
  )
}

export default Add