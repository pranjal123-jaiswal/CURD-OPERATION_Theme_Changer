import logo from './logo.svg';
import './App.css';
// import DarkMode from './component/darkMode/DarkMode';
import Header from './header'; 
import Home from './crudComponent/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './crudComponent/Add';
import Edit from './crudComponent/Edit';
import './App.css';


function App() {
  return (
    <div >
      <Header /> 
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route path="/add" element={<Add />} /> 
        <Route path="/edit" element={<Edit />} /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
