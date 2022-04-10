import styled from 'styled-components';

export const FooterSection = styled.footer`
    background: var(--black-color);
    padding: 1rem;
    color: var(--white-color);
`

export const FooterTop = styled.div`
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

export const FooterBody = styled.div`
    display: flex;
    flex-direction: column;
`

export const FooterText = styled.div`
    width: 100%;
    margin: 1rem 0;

    h4{
        line-height: 1.5rem;
    }

    @media screen and (min-width: 768px) {
        width: 60%;
    }
`

export const FooterFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const FooterRow = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 400px;
    margin: 1rem 1rem 2rem 0;
`


export const FooterCard = styled.div`
    padding: 1rem 1rem 0; 

    p{
        font-size: 10px;
    }
`

export const FooterCol = styled.div`
    padding: 1rem;
    width: 45%;
    margin: 1rem 0 0;

    h2{margin-bottom: 1rem;}

    @media screen and (max-width: 500px) {
        width: 100%;
    }

`

export const FooterLinks = styled.div`
    padding: 0 0 1rem;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
`
export const FooterBottom = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
`

export const Copyright = styled.div`
    > p{
        color: #8f8e8e;
        font-size: 12px;
    }
`

export const FooterSocial = styled.div`
    margin-left: 1rem;
    width: 2rem;
    border-radius: 50%;
    border: solid 2px var(--white-color);
    padding: 8px;
    display: grid;
    place-items: center;

    &:hover{
        color: var(--red-color);
    }
`