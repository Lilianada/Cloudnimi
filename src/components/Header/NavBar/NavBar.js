import '../../../App.css';
import Hamburger from '../Hamburger/Hamburger';
import React from 'react';

export default function Header () {
    
    return(
        <header className="navigation">
            <div className="mobileDisplay">
                <Hamburger />
            </div>

            <div className="desktopDisplay">
                <a href="#" className="mobileLogo"><h4>cloudnimi</h4></a>
                <ul className="navItems">
                    <li className="navList"><a href="#" className="navLink">Who we are</a></li>
                    <li className="navList"><a href="#" className="navLink">What we do</a></li>
                    <li className="navList"><a href="#" className="navLink">Why choose us</a></li>
                </ul>
                <div className="navRight"><a href="#" className="navLink">Contact</a></div>

                 
            </div>
        </header>
    )
};
