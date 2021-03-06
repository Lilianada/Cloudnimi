import styled from "styled-components" ;

export const Section = styled.section`
    width: 100%;
    padding: 4rem 0;
    background-color: var(--black-color);
    
    @media screen and (min-width: 901px) {
        /* height: 100vh; */
        display: grid;
        place-items: center;
   }

    > h3{
        text-align: center;
        text-transform: uppercase;
    }
`

export const Description =styled.p`
    width: 90%;
    text-align: center;
    margin: 2rem auto;
    font-weight: 300;
    color: #dddddd;
`

export const SectionWrap = styled.div`
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 2rem auto;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
    }

    @media screen and (min-width: 901px) {
        margin-top: 0rem;
   }
`

export const TechStack = styled.div`
    height: auto;
    width: fit-content;
    margin: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
    color: var(--black-color);

    @media screen and (min-width: 901px) {
        gap: 2rem;
   }
`
export const ImageWrap = styled.div`
    width: 5.85rem;
    height: 5.85rem;
    background-color: var(--white-color);
    text-align: center;
    padding: .35rem;
    border-radius: 10px;
    box-shadow: rgb(28 27 27) 0px 1px 6px 4px;
    -webkit-box-shadow: rgb(28 27 27) 0px 1px 6px 4px;
    -moz-box-shadow: rgb(28 27 27) 0px 1px 6px 4px;
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);

    &:hover{
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
    }
`

export const Image = styled.img`
    width: 50px;
`

export const TechDescription = styled.div`
    width: 90%;
    display: none;
    padding: 0 1rem;
    margin: 1rem 0;

    @media screen and (min-width: 500px) {
        width: 450px;
    }
`

export const DescriptionHead = styled.h3`
    margin-bottom: 1rem;
    color: var(--blue-color);
`

export const DescriptionText = styled.p`
    text-align: justify;
    word-break: break-word;
    white-space: pre-line;
    padding: 0 0 .5rem;
`