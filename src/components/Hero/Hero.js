import {Circle, Hero, BigHeroText, SmallHeroText, Image} from './HeroStyles.js'
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
            <Circle>
                <img src="https://static-cdn.icons8.com/l/3d-textures/images/3103_preview.webp" alt='globe' />
            </Circle>
        </Hero>
    );
}






