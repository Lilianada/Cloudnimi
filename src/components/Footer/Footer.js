import React from 'react';
import './Footer.css';
//import {BsLinkedin, BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs'

export default function Footer () {

        return(
            <footer className="footerSection">
                <div className="footerTop">
                    <div className="greeting"><h2>hello,</h2></div>
                    <div className="navLogo"><h4>cloudnimi</h4></div>
                </div>
                <div className="footerBody">
                    <div className="footerText">
                        <h4>
                            Have an idea? Ready to build that brand and execute that plan? 
                            Whether it’s a website, brand identity, product prototype. 
                            Let's make that idea ready to come to life.
                        </h4>
                    </div>
                    <div className="footerFlex">
                        <div className="footerRow">
                            <div className="footerCard">
                                <h4>work with us</h4>
                                <p>build@buildingbloques.com</p>
                            </div>
                            <div className="footerCard">
                                <h4>become one of us</h4>
                                <p>career@buildingbloques.com</p>
                            </div>
                            <div className="footerCard">
                                <h4>general enquiries</h4>
                                <p>hello@buildingbloques.com</p>
                            </div>
                            <div className="footerCard">
                                <h4>become an intern</h4>
                                <p>intern@buildingbloques.com</p>
                            </div>
                        </div>
                        <div className="footerCol">
                            <h2>745 Block 4, 5th Floor, Munich, Germany </h2>
                            <p>(002) 164-2459</p>
                        </div>
                    </div>
                </div>
                <div className="footerBottom">
                    <div className="copyrightWhite"><p>© 2021 <strong>building bloques,</strong> inc.</p></div>
                    <div className="footerLinks">
                        <a href="#" className="footerSocial">Linkedin</a>
                        <a href="#" className="footerSocial">Instagram</a>
                        <a href="#" className="footerSocial">Twitter</a>
                        <a href="#" className="footerSocial">Facebook</a>
                    </div>
                </div>
            </footer>
        )
}
