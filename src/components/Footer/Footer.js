import React from 'react';
import './FooterStyles.js';
import {BsLinkedin, BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs'
import { Copyright, FooterBody,
    FooterBottom,
    FooterCard,
    FooterCol,
    FooterFlex,
    FooterLinks,
    FooterRow,
    FooterSection, 
    FooterSocial, 
    FooterText, 
    FooterTop, 
    Greeting, 
    NavLogo } from './FooterStyles.js';

export default function Footer () {
        return(
            <FooterSection>
                <FooterTop>
                    <Greeting><h2>ekaro,</h2></Greeting>
                    {/* <NavLogo><h4>cloudnimi</h4></NavLogo> */}
                </FooterTop>
                <FooterBody>
                    <FooterText>
                        <h4>
                            Ready to build and execute that plan?<br/>
                            Get in touch with us, and let us help you get your cloud-native journey started.
                        </h4>
                    </FooterText>
                    <FooterFlex>
                        <FooterRow>
                            <FooterCard>
                                <h4>work with us</h4>
                                <p>work@cloudnimi.com</p>
                            </FooterCard>
                            <FooterCard>
                                <h4>become one of us</h4>
                                <p>career@cloudnimi.com</p>
                            </FooterCard>
                            <FooterCard>
                                <h4>general enquiries</h4>
                                <p>hello@cloudnimi.com</p>
                            </FooterCard>
                            <FooterCard>
                                <h4>become an intern</h4>
                                <p>intern@cloudnimi.com</p>
                            </FooterCard>
                        </FooterRow>
                        <FooterCol>
                            <h2>745 Block 4, 5th Floor, Munich, Germany </h2>
                            <p>(002) 164-2459</p>
                        </FooterCol>
                    </FooterFlex>
                </FooterBody>
                <FooterBottom>
                    <FooterLinks>
                        <FooterSocial href="#" ><BsLinkedin/></FooterSocial>
                        <FooterSocial href="#" ><BsInstagram/></FooterSocial>
                        <FooterSocial href="#" ><BsTwitter/></FooterSocial>
                        <FooterSocial href="#" ><BsFacebook/></FooterSocial>
                    </FooterLinks>
                    <Copyright><p>© 2022 <strong>cloudnimi</strong> by <a href="#">Designsbylilian</a></p></Copyright>
                </FooterBottom>
            </FooterSection>
        )
}

