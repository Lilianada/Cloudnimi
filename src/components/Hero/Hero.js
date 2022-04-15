import {Circle, Hero, BigHeroText, SmallHeroText, Image} from './HeroStyles.js'
import React from 'react';
import Rotate from '../../assets/rotate.webp'

export default function HeroSection () {
    return (
        <Hero>
            <BigHeroText>
                <h1>CLOUDNiMi</h1>
            </BigHeroText>
            <SmallHeroText>
                <h4>We help our clients build businesses by designing, building and implementing production-grade, 
                    business needs.
                </h4>
            </SmallHeroText>
            <Image src='https://deimos.io/static/planet-field-199c0a5593d324d1675db3cc46adf173.svg' alt='space'/>
            <Circle>
                <img src={Rotate} alt='globe' />
            </Circle>
        </Hero>
    );
}






