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
                                        We have strategy in place which we use in 
                                        analyzing your existing on-premises infrastructure 
                                        and move your application workloads and data into 
                                        the cloud while having cost optimisation in mind.
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
                                        Our aim is to shorten the software development lifecycle and 
                                        speed the delivery of higher-quality software by breaking down 
                                        the silos, combining and automating the infrastructure and 
                                        deployment to increase the velocity and agility while we 
                                        eradicate risk or failure on production through observability.
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
                                        We handle both your Cloud Native and container-base workloads, 
                                        we enhance the work of the engineers to make sure they only have 
                                        to focus on building products.
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
                                        We have internship program we run every year, 
                                        where we train cloud enthusiast on cloud infraostture as 
                                        DevOps and SRE for free. It is a way of giving back to the 
                                        community and equipping enthusiast with skills to standout in the society.
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