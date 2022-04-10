import React from "react";
import styled from "styled-components";
import Cloud from "../../assets/Userpics/SVG/Circle/OSLO-14.svg"

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
    )
}

export const Section = styled.section`
    width: 100%;

    > h3{
        text-align: center;
        text-transform: uppercase;
    }
`

export const ServiceWrap = styled.div`
    display: grid;
    place-items: center;
    gap: 1rem;
`

export const ServiceCard = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const ServiceImage = styled.img`
    width: 30%;
    margin: 1rem;
`

export const ServiceText = styled.p`
    width: 60%;
    margin: 1rem;
`

export const CardHead = styled.h4`
    color: var(--blue-color);
    font-size: 16px;
`

export const CardBody = styled.div`
`



// export const Section = styled.section`
// `

// export const Section = styled.section`
// `