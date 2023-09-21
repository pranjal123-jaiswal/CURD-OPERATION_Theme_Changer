import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import { useDispatch , useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from './State/index'

const DarkMode = () => {
    const dispatch = useDispatch()
    const selectedTheme = useSelector((state) => state.theme.selectedTheme);
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme" , "dark");
        localStorage.setItem("selectedTheme" , "dark")
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme" , "light");
        localStorage.setItem("selectedTheme" , "light")
    }
    const toggleTheme = (e) => {
        // if(e.target.checked) setDarkMode()
        // else setLightMode()
        if (selectedTheme === 'dark') {
            dispatch(ActionCreators.setLightMode());
          } else {
            dispatch(ActionCreators.setDarkMode());
          }
    }
    // const selectedTheme = localStorage.getItem("selectedTheme")
    if (selectedTheme === "dark"){
        setDarkMode()
    }
    else {
        setLightMode()
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked= {selectedTheme === "dark"}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
