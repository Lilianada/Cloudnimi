import React from "react";
import Samuel from "../../assets/Userpics/SVG/Square/Afterclap-4.svg";
import Lilian from "../../assets/Userpics/SVG/Square/Afterclap.svg";
import Seyi from "../../assets/Userpics/SVG/Square/Afterclap-6.svg";
import { ProfileCards, 
    ProfileImage, 
    ProfileRole, 
    ProfileText, 
    Section, 
    SubHead, 
    TeamProfile,
} from "./AboutStyles";
import {HiArrowNarrowDown} from "react-icons/hi";

export default function AboutUs () {
    return (
        <Section id="who-we-are">
            <h3>Who We Are <HiArrowNarrowDown/></h3>
            <SubHead>
                We are a professional team of Software and Cloud-Native Architects, 
                Site Reliability Engineers and Software Security Experts from across Africa.
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
            </SubHead>
            <TeamProfile>
                <ProfileCards>
                    <ProfileImage src={Samuel} alt='CEO Cloudnimi' />
                    <ProfileText>
                        <strong>Oluwasomidotun Amujo</strong>  
                        <br/><ProfileRole> Co-founder, CEO</ProfileRole>
                    </ProfileText>
                </ProfileCards>
                <ProfileCards>
                    <ProfileImage src={Lilian} alt='CEO Cloudnimi' />
                    <ProfileText>
                        <strong>Oluwapelumi Oluwaseyi</strong> 
                        <br/><ProfileRole> Co-founder, CTO</ProfileRole>
                    </ProfileText>
                </ProfileCards>
                <ProfileCards>
                    <ProfileImage src={Seyi} alt='CEO Cloudnimi' />
                    <ProfileText>
                        <strong>Lilian Onochie</strong>  
                        <br/><ProfileRole> Co-founder, COO</ProfileRole>
                    </ProfileText>
                </ProfileCards>
            </TeamProfile>
        </Section>
    );
}