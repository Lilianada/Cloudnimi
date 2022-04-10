import styled from "styled-components";


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