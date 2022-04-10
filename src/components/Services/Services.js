import React from "react";
import styled from "styled-components";

export default function Service () {
    return(
        <Section>
            <h3>What we do</h3>

            <ServiceWrap>
                <ServiceCard>
                    <CardHead>Cloud Migration</CardHead>
                    <CardBody>
                        We analyze existing applications as well as structure, and
                        delivery processes. We create assessments of source and target
                        clouds (efficiency, running costs, migration costs, etc.) and
                        design, plan and implement complex architectures, and
                        processes.
                    </CardBody>
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

`

export const ServiceCard = styled.div`

`

export const CardHead = styled.h4`
    color: var(--blue-color);
`

export const CardBody = styled.div`
`

// export const Section = styled.section`
// `

// export const Section = styled.section`
// `

// export const Section = styled.section`
// `

// export const Section = styled.section`
// `