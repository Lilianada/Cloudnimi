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
        </div>}

    </>
  )
};


// import Offcanvas from 'react-bootstrap/Offcanvas'
// import {Nav, NavDropdown, Navbar, Container} from 'react-bootstrap'
// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';


// function Hamburger() {
//     return (
//       <>
//         <Navbar bg="" expand={false}>
//             <Container fluid>
//                 <Navbar.Toggle aria-controls="offcanvasNavbar" />
//                 <Navbar.Offcanvas
//                 id="offcanvasNavbar"
//                 aria-labelledby="offcanvasNavbarLabel"
//                 placement="end"
//                 >
//                 <Offcanvas.Header closeButton>
//                     <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>
//                     <Nav className="justify-content-end flex-grow-1 pe-3">
//                     <Nav.Link href="#action1">Home</Nav.Link>
//                     <Nav.Link href="#action2">Link</Nav.Link>
//                     <NavDropdown title="" icon="bars" id="offcanvasNavbarDropdown">
//                         <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item href="#action5">
//                         Something else here
//                         </NavDropdown.Item>
//                     </NavDropdown>
//                     </Nav>
//                 </Offcanvas.Body>
//                 </Navbar.Offcanvas>
//             </Container>
//         </Navbar>
//       </>
//     );
//   }
// export default Hamburger

