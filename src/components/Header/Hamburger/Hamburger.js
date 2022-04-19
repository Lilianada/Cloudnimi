import { useState } from 'react'
import React from 'react';
import {BsLinkedin, BsInstagram, BsTwitter} from 'react-icons/bs'
import { NavLink } from 'react-router-dom';import Logo from '../../../assets/Logos/Logo.svg';
import styled from 'styled-components';
import { NavHashLink  } from 'react-router-hash-link';

const NavLogo = styled.div`
    width: 65px;
`

export default function Hamburger (){
    const [toggle, setToggle] = useState(false)

  return(
    <div className="mobileDisplay">
        <div className="navHeader">
            <a href="#" className="mobileLogo"><NavLogo><img src={Logo} /></NavLogo></a>
            <div className={toggle ? "change" : "navToggle"} onClick = {()=> setToggle(!toggle)}>
                <div className="bar bOne" >{toggle}</div>
                <div className="bar bTwo"></div>
                <div className="bar bThree"></div>
            </div> 
        </div>

        {toggle  && <div className={toggle ? "mobileMenu" : "active"}>
                <ul className="navItems">
                    <li className="navList">
                        <NavLink to="/" className="navLink">
                            <a href="/" className="mobileLogo"><NavLogo><img src={Logo} /></NavLogo></a>    
                        </NavLink>
                    </li>
                    <li className="navList"><NavHashLink smooth to="/#what-we-do" className="navLink">What we do</NavHashLink></li>
                    <li className="navList"><NavHashLink smooth to="/#what-we-use" className="navLink">What we use</NavHashLink></li>
                    <li className="navList"><NavHashLink smooth to="/#who-we-are" className="navLink">Who we are</NavHashLink></li>
                    <li className="navList"><NavHashLink smooth to="/#contact" className="navLink">Contact</NavHashLink></li>
                </ul>
                <div className="navFooter">
                    <div className="navSocialLinks">
                        <a href="/" className="SocialLink"><BsLinkedin /></a>
                        <a href="/" className="SocialLink"><BsInstagram /></a>
                        <a href="/" className="SocialLink"><BsTwitter /></a>
                    </div>
                    <div className="copyrightWhite">
                        <p>© 2022 cloudnimi, inc.</p>
                    </div>
                </div>
            </div>
        }

    </div>
  )
};

