import styled from 'styled-components';

export const Section = styled.section`
    padding: 1rem 2rem 0;
    color: var(--white-color);
    width: 90%;
    margin: 2rem auto;
`

export const Form = styled.form `
    display: none;
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
        color: var(--blue-color);
    }

    @media screen and (min-width: 768px) {
        /* width: 80%; */
    }
`

export const ContactFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    justify-content: space-between;
`

export const ContactRow = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 400px;
    margin: 1rem 1rem 1rem 0;
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

export const InputForms = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0;
`

export const InputName = styled.div`
    position: relative;
    width: 13.5rem;
    display: flex;
    align-items: center;
    background: #011a4294;
    border-radius: 6px;
    margin-right: 1rem;
    margin-bottom: 1rem;

    :hover{
        top: -2px;
        transition: .5s ease-in;
    }
`

export const Input = styled.input`
    background: none;
    border: none;
    outline: none;
    padding: .5rem;
    width: 100%;
    color: var(--white-color);
    font-family: inherit;
    box-shadow: 1px 0px 8px -2px rgb(165 159 159 / 28%);

    ::placeholder {
        font-size: 1em;
        color: #4d536e;
    }
`

export const TextArea = styled.textarea`
    width: 100%;
    height: 6rem;
    padding: 1rem;
    background: #011a4294;
    box-shadow: 1px 0px 8px -2px rgb(165 159 159 / 28%);
    border-radius: 6px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    outline: none;
    border: none;
    color: var(--white-color);
    font-family: inherit;
    position: relative;
    transition: all .5s ease-in;
    
    ::placeholder {
        font-size: 1em;
        color: #4d536e;
    }

    :hover{
        top: -2px;
    }

    @media screen and (min-width: 701px) {
        width: 60%;
   }

    @media screen and (min-width: 901px) {
        width: 28rem;
   }
`

export const Button = styled.button`
    width: 7rem;
    padding: .75rem;
    background: none;
    border-radius: 6px;
    border: 1px solid white;
    text-align: center;
    box-shadow: 1px 0px 8px -2px rgb(165 159 159 / 28%);
    transition: all .4s ease-in;
    cursor: pointer;
    margin-top: .75rem;
    color: var(--white-color);

    :hover{
        border-color: var(--blue-color);
    }
`