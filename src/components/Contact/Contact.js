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
    Button
} from "./ContactStyles";
import {MdPerson, MdOutlineMail} from "react-icons/md";
import Fade from 'react-reveal/Fade';
import Logo from '../../assets/Logos/Logo.svg';

export default function ContactUs () {
    const [status, setStatus] = useState("Submit");

    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Send");
      let result = await response.json();
      alert(result.status);
    };
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
                    <Form onSubmit={handleSubmit} action="#">
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
                        <Button type="submit">{status}</Button>
                    </Form>
                    <ContactFlex>
                        <ContactCol>
                            <h2>Lagos, Nigeria </h2>
                            <p>(+234) 810-000-0000</p>
                        </ContactCol>
                    </ContactFlex>
                </ContactBody>
            </Fade>
        </Section>
    );
}

