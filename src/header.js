import React from 'react'
import DarkMode from './component/darkMode/DarkMode';
import './App.css';
const Header = () => {
  return (
    <div >
    <nav className="navbar navbar-expand-lg custom-navbar">
    <div className="container-fluid ">
        <h1 className='custom-name'>CURD OPERATOR WITH Theme changer</h1>
        <DarkMode/>
       </div>
      {/* </div>
    </div> */}
    {/* </div> */}
  </nav>
  </div>
  )
}

export default Header