import React from "react";
import {ContactBody, 
    ContactCard, 
    ContactFlex, 
    NavLogo,
    ContactRow, 
    ContactText, 
    ContactTop, 
    Section,
    ContactCol,
    Greeting,
    Form,
    InputForms,
    Input,
    InputName,
    TextArea,
    Button
} from "./ContactStyles";
import {MdPerson, MdOutlineMail} from "react-icons/md";
import Fade from 'react-reveal/Fade';
import Logo from '../../assets/Logos/Logo.svg';

export default function ContactUs () {
    return(
        <Section id="contact">
            <Fade bottom>
                <ContactTop>
                    <Greeting><h2>hello,</h2></Greeting>
                    <NavLogo><img src={Logo} /></NavLogo>
                </ContactTop>
                <ContactBody>
                    <ContactText>
                        <h4>
                            Ready to build and execute that plan?<br/>
                            Get in touch with us, and let us help you get your cloud-native journey started.
                        </h4>
                    </ContactText>
                    <Form>
                        <InputForms>
                            <InputName>
                                <MdPerson style={{margin: ".5rem 0 .5rem .75rem"}} size={18} />
                                <Input type="email" id="name" placeholder="Name" required />
                            </InputName>
                            <InputName>
                                <MdOutlineMail style={{margin: ".5rem 0 .5rem .75rem"}} size={18} />
                                <Input type="email" id="email" placeholder="Email" required />
                            </InputName>
                        </InputForms>
                        <TextArea id="text" placeholder="Message" rows="1" required />
                        <Button type="submit">Send</Button>
                    </Form>
                    <ContactFlex>
                        <ContactRow>
                            <ContactCard>
                                <h4>general enquiries</h4>
                                <p>hello@cloudnimi.com</p>
                            </ContactCard>
                            <ContactCard>
                                <h4>work with us</h4>
                                <p>work@cloudnimi.com</p>
                            </ContactCard>
                            <ContactCard>
                                <h4>become one of us</h4>
                                <p>career@cloudnimi.com</p>
                            </ContactCard>
                            <ContactCard>
                                <h4>become an intern</h4>
                                <p>intern@cloudnimi.com</p>
                            </ContactCard>
                        </ContactRow>
                        <ContactCol>
                            <h2>745 Block 4, 5th Floor, Munich, Germany </h2>
                            <p>(002) 164-2459</p>
                        </ContactCol>
                    </ContactFlex>
                </ContactBody>
            </Fade>
        </Section>
    );
}


            