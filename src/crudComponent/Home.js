import React from "react";
import { Fragment } from "react";
import Employee from './Employee';
import { NavLink, useNavigate } from 'react-router-dom';
import '../App.css';



const Home = () => {
  
    const [employees, setEmployees] = React.useState(Employee);

    let navigate = useNavigate()
    const handleDelete = (id) => {
        const updatedEmployees = employees.filter((employee) => employee.id !== id);
        setEmployees(updatedEmployees);
    }
    const handleEdit = (id , name , age) => {

      localStorage.setItem('Name' , name)
      localStorage.setItem('Age' , age)
      localStorage.setItem('Id' , id)
      navigate("/edit")

    }

    return (
        <Fragment>
           <div style={{ margin: '10rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <table className="table table-striped table-bordered table-hover table-sm">
        <thead >
        <tr className="table_head">
      <th>Name</th>
      <th>Age</th>
      <th>ACTIONS</th>
    </tr>
        </thead>
        <tbody>
          {employees && employees.length > 0 ? (
            employees.map((item, index) => (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>DELETE</button>
                  &nbsp;
                  <button onClick={() => handleEdit(item.id, item.Name, item.Age)}>EDIT</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">NO DATA FOUND</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="create-button-container">
        <NavLink className="nav-link active" aria-current="page" to="/add" style={{ color: 'white', fontSize: '24px' }} >
          CREATE
        </NavLink>
      </div>
    </div>
        </Fragment>
    );
}

export default Home;
