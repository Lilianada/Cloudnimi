import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    padding: 2rem 2rem 4rem;
    display: grid;
    place-items: center;
    margin: 0 auto;
    background: #011a42;

    > h3{
        text-align: center;
        text-transform: uppercase;
    }
`

export const Description = styled.p`
    text-align: center;
    width: 90%;
    margin: 2rem auto;
`

export const Columns = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 2rem auto;
    gap: 2rem;
    width: 90%;

    @media screen and (min-width: 900px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
`

export const Row = styled.div`
    /* width: 300px; */
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media screen and (min-width: 900px) {
        /* width: 450px; */
    }
`

export const IconWrap = styled.div`
    width: 7rem;
    height: 3.5rem;
    background-color: var(--blue-color);
    text-align: center;
    padding: 1rem;
    margin-top: .5rem;
    margin-right: 1.5rem;
    border-radius: 10px;
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);

    &:hover{
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
    }
`

export const TextWrap = styled.div`

`

export const TextHead = styled.h4`
    color: var(--blue-color);
`

export const Text = styled.p`

`
