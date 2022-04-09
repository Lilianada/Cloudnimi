import styled from 'styled-components';

export const Hero = styled.section`
    position: relative;
    padding-left: 2rem;
    padding-right: 2rem;
    background: var(--black-color);
    height: 100%;
    /* top: -5rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 900px){
        padding-top: 2rem;
        top: 0;
    }
`
export const BigHeroText = styled.div`
    margin: 0 auto;
    z-index: 1;

    @media screen and (min-width: 900px){
        padding-top: 2rem;
        top: 0;
    }

    h1 {
        font-family: var(--fontTwo);
        letter-spacing: -3px;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        background-color: #0074ea;
        background-image: linear-gradient(160deg, #0074ea 40%, #80D0C7 100%);

        @media screen and (min-width: 450px) {            
            font-size: 10rem;
        }

        @media screen and (min-width: 650px) {
            font-size: 15rem;
        }
    }
`
export const SmallHeroText = styled.div`
    padding-top: 2rem;

    h4 {
        text-align: center;
        text-transform: uppercase;
        margin: 0 auto;
        line-height: 2rem;
        font-size: var(--font-sixteen);
        color: var(--white-color);

        @media screen and (min-width: 900px) {
            width: 80%;
        }
    }
`

export const Image = styled.img`
    position: absolute;
    top: 30%;
`

export const SVG = styled.svg`
    position: absolute;
    top: 20%;
    height: 60%;
    left: 20%;
    width: 60%;

`

// export const Rotate = styled.img`
//     position: absolute;
//     height: 450px;
//     opacity: 0.2;
//     margin: 0 auto;
//     display: block;
//     -o-object-fit: contain;
//     object-fit: contain;
//     -webkit-animation: animationglob 50s cubic-bezier(1, 0.99, 0.03, 0.01) infinite;
//     animation: animationglob 50s cubic-bezier(1, 0.99, 0.03, 0.01) infinite;

//     @keyframes animationglob {
//         0% {
//         transform: rotate(0deg);
//         }
//         0% {
//             transform: rotate(360deg);
//         }
//     }
// `
