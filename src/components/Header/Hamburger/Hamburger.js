import { useState } from 'react'
import React from 'react';
import {BsLinkedin, BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs'

export default function Hamburger (){
    const [toggle, setToggle] = useState(false)

  return(
    <>
        <div className="navHeader">
            <a href="#" className="mobileLogo"><h4>cloudnimi</h4></a>
            <div className={toggle ? "change" : "navToggle"} onClick = {()=> setToggle(!toggle)}>
                <div className="bar bOne" >{toggle}</div>
                <div className="bar bTwo"></div>
                <div className="bar bThree"></div>
            </div> 
        </div>

        {toggle  && <div className={toggle ? "mobileMenu" : "active"}>
            <ul className="navItems">
                        <li className="navList"><a href="/pages/About" className="navLink">Who we are</a></li>
                        <li className="navList"><a href="/pages/Services" className="navLink">What we do</a></li>
                        <li className="navList"><a href="/pages/Project" className="navLink">Why choose us</a></li>
                        <li className="navList"><a href="/pages/Contact" className="navLink">Contact</a></li>
                    </ul>
                <div className="navFooter">
                    <div className="navSocialLinks">
                        <a href="/" className="SocialLink"><BsLinkedin /></a>
                        <a href="/" className="SocialLink"><BsInstagram /></a>
                        <a href="/" className="SocialLink"><BsTwitter /></a>
                        <a href="/" className="SocialLink"><BsFacebook /></a>
                    </div>
                    <div className="copyrightWhite">
                        <p>© 2022 cloudnimi, inc.</p>
                    </div>
                </div>
            </div>
        }

    </>
  )
};

