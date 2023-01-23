import styled from "styled-components";

export const Container = styled.section`
    width: 100vw;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 2rem;
    background-color: red;
    font-size: 5rem;
    border-bottom: 2px solid rgba( 0, 0, 0, 0.2);

    & div{
        display: flex;
        gap: 3rem;

        & input{
            border-radius: 2rem;
        
        }
    }
`;

export const Logo = styled.div`


`;