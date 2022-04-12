import styled from "styled-components";
import bg from "../../assets/3103_Diffuse.jpg";

export const Section = styled.section`
    width: 100%;
    padding: 2rem;
    display: grid;
    place-items: center;

    > h3{
        text-align: center;
        text-transform: uppercase;
    }
`


export const Description = styled.p`
    text-align: center;
    width: 80%;
`

export const Columns = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
`

export const Row = styled.div`
    width: 300px;
    display: flex;
`

export const TextWrap = styled.div`
    width: 5.5rem;
    height: 5.5rem;
    background-color: var(--blue-color);
    text-align: center;
    padding: .3rem;
    border-radius: 10px;
    box-shadow: 3px 2px 22px 0px rgb(165 159 159 / 52%);
    -webkit-box-shadow: 3px 2px 22px 0px rgb(165 159 159 / 52%);
    -moz-box-shadow: 3px 2px 22px 0px rgb(165 159 159 / 52%);
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);

    &:hover{
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
    }
`
