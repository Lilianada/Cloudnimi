import styled from 'styled-components';

export const Section = styled.section`
    padding: 2rem 0;
    color: var(--white-color);
    width: 90%;
    margin: 0 auto;
`

export const Form = styled.form `
    display: grid;
    width: 100%;
    margin-bottom: 1rem;

    @media screen and (min-width: 700px) {
        width: 65%;
   }
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
    width: 65px;
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
`

export const ContactFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 1rem;
    justify-content: space-between;
`

export const ContactCard = styled.div`
    padding: 1rem 0 0; 

    p{
        font-size: 10px;
    }
`

export const ContactCol = styled.address`
    padding: 1rem 0;
    width: 100%;
    margin: 1rem 0 0;
    font-style: normal;

    h2{margin-bottom: 1rem;}
`

export const InputForms = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0;
`

export const InputName = styled.div`
    position: relative;
    width: 45%;
    height: 3rem;
    display: flex;
    align-items: center;
    background: #04255b;
    border-radius: 6px;
    margin-right: 1rem;
    margin-bottom: 1rem;

    :hover{
        top: -2px;
        transition: .5s ease-in;
    }

    @media screen and (min-width: 700px) {
        width: 46%;
   }

    @media screen and (min-width: 1100px) {
        width: 47%;
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
    
    & :focus{
        box-shadow: 1px 0px 8px -2px rgb(165 159 159 / 28%);
    }

    ::placeholder {
        font-size: 1em;
        color: #dddddd;
    }
`

export const TextArea = styled.textarea`
    width: 96%;
    height: 10rem;
    padding: 1rem;
    background: #04255b;
    border-radius: 6px;
    margin-bottom: 1rem;
    outline: none;
    border: none;
    color: var(--white-color);
    font-family: inherit;
    position: relative;
    transition: all .5s ease-in;
    
    ::placeholder {
        font-size: 1rem;
        color: #dddddd;
    }

    :hover{
        top: -2px;
    }

    :focus{
        box-shadow: 1px 0px 8px -2px rgb(165 159 159 / 28%);
    }
`

export const Message = styled.div`
    
`

export const Button = styled.button`
    width: 7rem;
    padding: .75rem;
    background: none;
    border-radius: 6px;
    border: 1px solid #dddddd;
    text-align: center;
    box-shadow: 1px 0px 8px -2px rgb(165 159 159 / 28%);
    transition: all .4s ease-in;
    cursor: pointer;
    margin-top: .75rem;
    color: var(--white-color);

    :hover{
        border-color: var(--blue-color);
        color: var(--blue-color);
    }
`