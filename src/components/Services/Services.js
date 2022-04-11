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
import wave from "../../assets/wave.svg";

export default function Service () {
    return(
        <Section>
            <h3>What we do <HiArrowNarrowDown/></h3>

            <ServiceWrap>
                <ServiceCard>
                    <ServiceImage src={Circle} alt="Service"/>
                    <ServiceText>
                        <CardHead>Cloud Migration</CardHead>
                        <CardBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Elit at imperdiet dui accumsan sit amet nulla. 
                            Ultricies mi quis hendrerit dolor magna eget. 
                        </CardBody>
                    </ServiceText>
                </ServiceCard>
                <ServiceCard style={{flexDirection: 'row-reverse'}}>
                    <ServiceImage src={Square} alt="Service"/>
                    <ServiceText>
                        <CardHead>Cloud Native & Kubernetes</CardHead>
                        <CardBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Elit at imperdiet dui accumsan sit amet nulla. 
                            Ultricies mi quis hendrerit dolor magna eget. 
                        </CardBody>
                    </ServiceText>
                </ServiceCard>
                <ServiceCard>
                    <ServiceImage src={Connect} alt="Service"/>
                    <ServiceText>
                        <CardHead>DevOps & Site-Reliability-Engineering</CardHead>
                        <CardBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Elit at imperdiet dui accumsan sit amet nulla. 
                        </CardBody>
                    </ServiceText>
                </ServiceCard>
                <ServiceCard style={{flexDirection: 'row-reverse'}}>
                    <ServiceImage src={Circle} alt="Service"/>
                    <ServiceText>
                        <CardHead>Trainings</CardHead>
                        <CardBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Elit at imperdiet dui accumsan sit amet nulla. 
                        </CardBody>
                    </ServiceText>
                </ServiceCard>
            </ServiceWrap>
        </Section>
    );
}
