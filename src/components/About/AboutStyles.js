import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    display: grid;
    place-items: center;
    /* margin: 2rem 0; */
    padding: 2rem;
    > h3{
        text-transform: uppercase;
    }
`

export const SubHead = styled.p`
    text-align: center;
    padding: 1rem 0;
`

export const TeamProfile = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const ProfileCards = styled.div`
    width: 240px;
    border: 1px solid var(--grey-color);
    border-radius: 10px;
    margin: 1rem;
    background-position: center;
    background-size: cover;
    transform: .3s ease-in-out;
    cursor: pointer;
    box-shadow: 0 10px 40px 2px rgba(0,0,0,0.4);
    position: relative;
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);

    &:hover {
        transition: all 0.5s ease-in-out;
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
    }

`

export const ProfileImage = styled.img`
    border-radius: 10px 10px 0 0px;
    width: 100%;
`

export const ProfileText = styled.h4`
    padding: .5rem;
`

export const ProfileRole = styled.span`
    color: var(--grey-color);  
`