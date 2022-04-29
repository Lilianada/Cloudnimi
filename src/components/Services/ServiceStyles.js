import styled from "styled-components";


export const Section = styled.section`
    width: 100%;
    background: #011a42;
    padding: 4rem 2rem;
    position: relative;

    
    &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 215px;
        background: url();
        background-size: cover;
        background-repeat: no-repeat;
    }

    > h3{
        text-align: center;
        text-transform: uppercase;
    }
`

export const ServiceWrap = styled.div`
    display: grid;
    place-items: center;
    gap: 1rem;
    margin-top: 1rem;
`

export const ServiceCard = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`

export const ServiceImage = styled.img`
    width: 30%;
    margin: 1rem;
`

export const ServiceText = styled.div`
    text-align: center;
    margin: 1rem;

    @media screen and (min-width: 700px) {
        text-align: left;
        width: 500px;
    }
`

export const CardHead = styled.h4`
    color: var(--blue-color);
    font-size: 16px;
    line-height: 2.5rem;
`

export const CardBody = styled.p`
`