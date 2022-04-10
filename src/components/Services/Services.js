import React from "react";
import Cloud from "../../assets/Userpics/SVG/Circle/OSLO-14.svg";
import { CardBody, 
    CardHead, 
    Section, 
    ServiceCard, 
    ServiceImage, 
    ServiceText, 
    ServiceWrap 
} from "./ServiceStyles";


export default function Service () {
    return(
        <Section>
            <h3>What we do</h3>

            <ServiceWrap>
                <ServiceCard>
                    <ServiceImage src={Cloud} alt="Service"/>
                    <ServiceText>
                        <CardHead>Cloud Migration</CardHead>
                        <CardBody>
                            We analyze existing applications as well as structure, and
                            delivery processes. We create assessments of source and target
                            clouds (efficiency, running costs, migration costs, etc.) and
                            design, plan and implement complex architectures, and
                            processes.
                        </CardBody>
                    </ServiceText>
                </ServiceCard>
                <ServiceCard style={{flexDirection: 'row-reverse'}}>
                    <ServiceImage src={Cloud} alt="Service"/>
                    <ServiceText>
                        <CardHead>Cloud Migration</CardHead>
                        <CardBody>
                            We analyze existing applications as well as structure, and
                            delivery processes. We create assessments of source and target
                            clouds (efficiency, running costs, migration costs, etc.) and
                            design, plan and implement complex architectures, and
                            processes.
                        </CardBody>
                    </ServiceText>
                </ServiceCard>
                <ServiceCard>
                    <ServiceImage src={Cloud} alt="Service"/>
                    <ServiceText>
                        <CardHead>Cloud Migration</CardHead>
                        <CardBody>
                            We analyze existing applications as well as structure, and
                            delivery processes. We create assessments of source and target
                            clouds (efficiency, running costs, migration costs, etc.) and
                            design, plan and implement complex architectures, and
                            processes.
                        </CardBody>
                    </ServiceText>
                </ServiceCard>
                <ServiceCard style={{flexDirection: 'row-reverse'}}>
                    <ServiceImage src={Cloud} alt="Service"/>
                    <ServiceText>
                        <CardHead>Cloud Migration</CardHead>
                        <CardBody>
                            We analyze existing applications as well as structure, and
                            delivery processes. We create assessments of source and target
                            clouds (efficiency, running costs, migration costs, etc.) and
                            design, plan and implement complex architectures, and
                            processes.
                        </CardBody>
                    </ServiceText>
                </ServiceCard>
            </ServiceWrap>
        </Section>
    );
}
