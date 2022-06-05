import React, { useState } from "react";
import {ContactBody, 
    ContactFlex, 
    NavLogo,
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
    Message,
    Button
} from "./ContactStyles";
import {MdPerson, MdOutlineMail} from "react-icons/md";
import Fade from 'react-reveal/Fade';
import Logo from '../../assets/Logos/Logo.svg';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'

const Result = () => {
    return(
        <ResultTxt>Your message has been successfully sent. We will be in touch.</ResultTxt>
    )
}

const ResultTxt = styled.p`
    background: #04255b;
    padding: 1rem;
    margin: 1rem 0;
`

export default function ContactUs () {
    const [result, setResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lcm7fza', 'template_6oihq07', Form.current, 'H75CmQ9Cr6jQzEmFm')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        setResult(true)
    };

    setTimeout(() =>{
        setResult(false);
    }, 4000);

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
                    <Form onSubmit={sendEmail} action="" ref={Form}>
                        <InputForms>
                            <InputName>
                                <MdPerson style={{margin: ".5rem 0 .5rem .75rem", fill:"#dddddd"}} size={18} />
                                <Input type="name" name="name" placeholder="Name" required />
                            </InputName>
                            <InputName>
                                <MdOutlineMail style={{margin: ".5rem 0 .5rem .75rem"}} size={18} />
                                <Input type="email" name="email" placeholder="Email" required />
                            </InputName>
                        </InputForms>
                        <TextArea name="message" placeholder="Message" rows="1" required />
                        <Button type="submit">Send</Button>
                        <Message>
                            {
                                result ? <Result/> : null
                            }
                        </Message>
                    </Form>
                    <ContactFlex>
                        <ContactCol>
                            <h2>Lagos, Nigeria </h2>
                            <p>(+234) 813-779-6995</p>
                        </ContactCol>
                    </ContactFlex>
                </ContactBody>
            </Fade>
        </Section>
    );
}

