import React from "react";
import styled from "styled-components";

export default function AboutUs () {
    return (
        <Section>
            <h3>Who We Are</h3>
            <SubHead>
                We are a professional team of Software and Cloud-Native Architects, 
                Site Reliability Engineers and Software Security Experts from across Africa.
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                adipisci velit, sed quia non numquam eius modi tempora incidunt.
            </SubHead>
            <TeamProfile>
                <ProfileCards>

                </ProfileCards>
                <ProfileCards>

                </ProfileCards>
                <ProfileCards>

                </ProfileCards>
                <ProfileCards>

                </ProfileCards>
                <ProfileCards>

                </ProfileCards>
                <ProfileCards>

                </ProfileCards>
            </TeamProfile>
        </Section>
    )
}

export const Section = styled.section`
    width: 100%;
    display: grid;
    place-items: center;
    margin: 2rem 0;
    padding: 0 2rem;
`
export const SubHead = styled.p`
    text-align: center;
    padding: 1rem 0;
`

export const TeamProfile = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 2rem;
`

export const ProfileCards = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid var(--grey-color);
    border-radius: 10px;
    background: url(https://deimos.io/static/planet-field-199c0a5593d324d1675db3cc46adf173.svg);
    background-position: center;
    background-size: cover;
`