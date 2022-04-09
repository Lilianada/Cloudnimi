import {Hero, BigHeroText, SmallHeroText, Image, Rotate} from './HeroStyles.js'
import React from 'react';

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
        </Hero>
    );
}






