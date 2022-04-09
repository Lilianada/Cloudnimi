import {Hero, BigHeroText, SmallHeroText} from './HeroStyles.js'
import React from 'react';

export default function HeroSection () {
    return (
        <Hero>
            <BigHeroText>
                <h1>cloudnimi</h1>
            </BigHeroText>
            <SmallHeroText>
                <h4>We help our clients build businesses by designing, building and implementing production-grade, 
                    secure and scalable infrastructure that delight developers and satisfy your current and future 
                    business needs.
                </h4>
            </SmallHeroText>
        </Hero>
    );
}



