import styled from "styled-components";


export const Section = styled.section`
    width: 100%;
    background: #011a4294;
    padding: 2rem 2rem 0 2rem;
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
    justify-content: center;
    align-items: center;
`

export const ServiceImage = styled.img`
    width: 25%;
    margin: 1rem;
`

export const ServiceText = styled.div`
    text-align: center;
    margin: 1rem;

    @media screen and (min-width: 700px) {
        text-align: left;
        width: 350px;
    }
`

export const CardHead = styled.h4`
    color: var(--blue-color);
    font-size: 16px;
`

export const CardBody = styled.p`
`

// export const Bar = styled.div`
//     /* display: none; */
//     width: 42%;
//     height: 1px;
//     background: white;
//     transform: rotate(150deg);
//     justify-content: space-between;
//     align-items: center;

//     @media screen and (min-width: 1000px) {
//         display: flex;
//     }
// `

// export const BarAlt = styled(Bar)`
//     transform: rotate(210deg);
// `

// export const BarTip = styled.div`
//     background: red;
//     width: 6px;
//     height: 1px;
// `
// export const BarLeft = styled.div`
// `
// export const BarLeft = styled.div`
// `