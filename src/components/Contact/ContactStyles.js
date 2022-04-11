import styled from 'styled-components';

export const Section = styled.section`
    padding: 1rem 1rem 0;
    color: var(--white-color);
`

export const Form = styled.form `

`

export const ContactTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;

    h2{font-size: 48px;}
`

export const Greeting = styled.div`

`

export const NavLogo = styled.div`
    h4{
    color: var(--white-color);
    font-family: var(--fontTwo);
    }
`

export const ContactBody = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContactText = styled.div`
    width: 100%;
    margin: 1rem 0;

    h4{
        line-height: 1.5rem;
    }

    @media screen and (min-width: 768px) {
        width: 60%;
    }
`

export const ContactFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const ContactRow = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 400px;
    margin: 1rem 1rem 0 0;
`


export const ContactCard = styled.div`
    padding: 1rem 0 0; 

    p{
        font-size: 10px;
    }
`

export const ContactCol = styled.div`
    padding: 1rem 0;
    width: 45%;
    margin: 1rem 0 0;

    h2{margin-bottom: 1rem;}

    @media screen and (max-width: 500px) {
        width: 100%;
    }

`

