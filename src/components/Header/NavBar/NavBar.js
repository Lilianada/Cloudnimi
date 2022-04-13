import '../../../App.css';
import Hamburger from '../Hamburger/Hamburger';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header () {
    
    return(
        <header className="navigation">
            <div className="mobileDisplay">
                <Hamburger />
            </div>

            <div className="desktopDisplay">
                <a href="/" className="mobileLogo"><h4>cloudnimi</h4></a>
                <ul className="navItems">
                    <li className="navList"><NavLink to="/Service" className="navLink">What we do</NavLink></li>
                    <li className="navList"><NavLink to="/techstack" className="navLink">What we use</NavLink></li>
                    <li className="navList"><NavLink to="/aboutus" className="navLink">Who we are</NavLink></li>
                    <li className="navList"><NavLink to="/cloudnimidescription" className="navLink">Why choose us</NavLink></li>
                    <li className="navList"><NavLink to="/contact" className="navLink">Contact</NavLink></li>
                </ul>
            </div>
        </header>
    )
};
