import React from "react";
import Circle from "../../assets/Simple.svg";
import Square from "../../assets/square.svg";
import Connect from "../../assets/connect.svg";
import { CardBody, 
    CardHead, 
    Section, 
    ServiceCard, 
    ServiceImage, 
    ServiceText, 
    ServiceWrap 
} from "./ServiceStyles";
import {HiArrowNarrowDown} from "react-icons/hi";
import Fade from 'react-reveal/Fade';

class Service extends React.Component {
    render() {
        return(
            <Section id="what-we-do">
                <h3>What we do <HiArrowNarrowDown/></h3>
                <ServiceWrap>
                        <Fade bottom cascade>
                            <ServiceCard>
                                <ServiceImage src={Circle} alt="Service" />
                                <ServiceText>
                                    <CardHead>Cloud Migration</CardHead>
                                    <CardBody>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Elit at imperdiet dui accumsan sit amet nulla. Ultricies mi quis hendrerit dolor magna eget.
                                    </CardBody>
                                </ServiceText>
                            </ServiceCard>
                        </Fade>
                        <Fade bottom cascade>
                            <ServiceCard style={{flexDirection: 'row-reverse'}}>
                                <ServiceImage src={Connect} alt="Service"/>
                                <ServiceText>
                                    <CardHead>DevOps & Site-Reliability-Engineering</CardHead>
                                    <CardBody>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Elit at imperdiet dui accumsan sit amet nulla. Ultricies mi quis hendrerit dolor magna eget.
                                    </CardBody>
                                </ServiceText>
                            </ServiceCard>
                        </Fade>
                        <Fade bottom cascade>
                            <ServiceCard>
                                <ServiceImage src={Square} alt="Service" />
                                <ServiceText>
                                    <CardHead>Cloud Native & Kubernetes</CardHead>
                                    <CardBody>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Elit at imperdiet dui accumsan sit amet nulla. Ultricies mi quis hendrerit dolor magna eget.
                                    </CardBody>
                                </ServiceText>
                            </ServiceCard>
                        </Fade>
                        <Fade bottom cascade>
                            <ServiceCard style={{flexDirection: 'row-reverse'}}>
                                <ServiceImage src={Circle} alt="Service"/>
                                <ServiceText>
                                    <CardHead>Trainings</CardHead>
                                    <CardBody>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Elit at imperdiet dui accumsan sit amet nulla. Ultricies mi quis hendrerit dolor magna eget.
                                    </CardBody>
                                </ServiceText>
                            </ServiceCard>
                        </Fade>
                </ServiceWrap>
            </Section>
        );
    }
}

export default Service;