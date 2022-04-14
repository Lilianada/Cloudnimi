import '../../../App.css';
import Hamburger from '../Hamburger/Hamburger';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../../assets/Logos/Cloudnimi.svg';

const NavLogo = styled.div`
    width: 65px;
`

export default function Header () {
    
    return(
        <header className="navigation">
            <div className="mobileDisplay">
                <Hamburger />
            </div>

            <div className="desktopDisplay">
                <a href="/" className="mobileLogo"><NavLogo><img src={Logo} /></NavLogo></a>
                <ul className="navItems">
                    <li className="navList"><NavLink to="/what-we-do" className="navLink">What we do</NavLink></li>
                    <li className="navList"><NavLink to="/what-we-use" className="navLink">What we use</NavLink></li>
                    <li className="navList"><NavLink to="/who-we-are" className="navLink">Who we are</NavLink></li>
                    <li className="navList"><NavLink to="/cloudnimi" className="navLink">Why choose us</NavLink></li>
                    <li className="navList"><NavLink to="/contact" className="navLink">Contact</NavLink></li>
                </ul>
            </div>
        </header>
    )
};
