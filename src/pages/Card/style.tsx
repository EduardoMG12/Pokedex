import styled from "styled-components";

export const Section = styled.section`
    width: 100vw;
    min-height: 100vh;
    background: url(https://wallpaperaccess.com/full/4167709.gif) no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    & div{
        color: rgba(222,222,222,0.9);
        margin: 0 auto;
        font-size: 1.7rem;
        max-width: 100vw;
        width: 50%;
    
    }
`;