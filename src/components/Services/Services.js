import React from "react";
// import Circle from "../../assets/Simple.svg";
// import Square from "../../assets/square.svg";
// import Connect from "../../assets/connect.svg";
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
import { ServiceListLeft, ServiceListRight } from "../Lists";

class Service extends React.Component {
    render() {
        return(
            <Section id="what-we-do">
                <h3>What we do <HiArrowNarrowDown/></h3>
                <ServiceWrap>
                    {ServiceListLeft.map((list, idx) => (
                        <Fade left cascade>
                            <ServiceCard key={list.id}>
                                <ServiceImage src={list.img} alt="Service" />
                                <ServiceText>
                                    <CardHead>{list.head}</CardHead>
                                    <CardBody>
                                        {list.body}
                                    </CardBody>
                                </ServiceText>
                            </ServiceCard>
                        </Fade>
                    ))}
                    {ServiceListRight.map((list, idx) => (
                        <Fade right cascade>
                            <ServiceCard style={{flexDirection: 'row-reverse'}} key={list.id}>
                                <ServiceImage src={list.img} alt="Service"/>
                                <ServiceText>
                                    <CardHead>{list.head}</CardHead>
                                    <CardBody>
                                       {list.body}
                                    </CardBody>
                                </ServiceText>
                            </ServiceCard>
                        </Fade>
                    ))}
                </ServiceWrap>
            </Section>
        );
    }
}

export default Service;