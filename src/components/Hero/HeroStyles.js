import styled from 'styled-components';

export const Hero = styled.section`
    position: relative;
    padding: 2rem;
    background: var(--black-color);
    height: 100%;
    display: grid;
    place-items: center;
    overflow: hidden;

    @media screen and (min-width: 900px){
        height: 100vh;
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
    z-index: 1;

    h4 {
        text-align: center;
        text-transform: uppercase;
        margin: 0 auto;
        line-height: 1.5rem;
        font-size: var(--font-sixteen);
        color: var(--white-color);

        @media screen and (min-width: 900px) {
            width: 90%;
        }
    }
`

export const Image = styled.img`
    position: absolute;
    top: 22%;
    left: -43%;
`

export const SVG = styled.svg`
    position: absolute;
    top: 20%;
    height: 60%;
    left: 20%;
    width: 60%;

`

export const Circle = styled.div`
    width: 26rem;
    height: 36rem;
    position: absolute;
    top: -6%;
    right: -20%;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    animation: rotation 45s infinite linear;
    z-index: 0;
/* 
    > img {
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(360deg) skew(0deg, 0deg);
        opacity: 1;
        transform-style: preserve-3d;
    } */

    @keyframes rotation {
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(359deg);
        }
    }

    @media screen and (min-width: 900px) {
        width: 46rem;
        height: 46rem;
    }

    @media screen and (min-width: 1280px) {
        width: 54rem;
        height: 54rem;
    }
`