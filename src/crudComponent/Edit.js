import React, { useEffect, useState } from 'react'
import Employee from './Employee';
import { v4 as uuid } from "uuid";
import {Form, NavLink , useNavigate} from "react-router-dom"

function Edit(){
    const [name , setName] = useState('')
    const [age , setAge] = useState('')
    const [id , setId] = useState('')
    const [employees, setEmployees] = React.useState(Employee);

    let navigate = useNavigate()

    var index = Employee.map(function(e){
        return e.id
    }).indexOf(id)

        const handleSubmit = (e) => {
            e.preventDefault()
            let a = Employee[index]
           a.Name = name;
           a.Age = age
      
             navigate("/");
          }


          useEffect(() => {
            setName(localStorage.getItem('Name'))
            setAge(localStorage.getItem('Age'))
            setId(localStorage.getItem('Id'))
          }, [])
        return(
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

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
            </div>
        )

}
export default Edit