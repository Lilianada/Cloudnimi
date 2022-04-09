

// .curve{
//     width: 10px;
//     height: 10px;
//     border-radius: 50%;
//     position: absolute;
//     z-index: 3;
//     background-color: #0074ea;
//     background-image: linear-gradient(160deg, #0074ea 40%, #80D0C7 100%);
// }

import styled from 'styled-components';

export const Hero = styled.section`
    position: relative;
    padding-left: 2rem;
    padding-right: 2rem;
    background: var(--black-color);
    height: 100vh;
    top: -5rem;
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
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    margin-bottom: 3rem;
    justify-content: center;
    align-items: center;

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
            font-size: 7rem;
            line-height: 4rem;
    
        }

        @media screen and (min-width: 650px) and (max-width: 899px) {
            font-size: 10rem;
            line-height: 8rem;
        }

        @media screen and (min-width: 900px) {
            font-size: 13rem;
            line-height: 15rem;
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