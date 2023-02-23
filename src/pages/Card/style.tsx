import styled from "styled-components";

export const Section = styled.section`
    width: 100vw;
    min-height: 100vh;
    background: url(https://wallpaperaccess.com/full/4167709.gif) no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    & div:last-child{
        color: rgba(222,222,222,0.9);
        margin: 0 auto;
        font-size: 1.7rem;
        max-width: 100vw;
        width: 50%;
        & h2{
            text-align: center;
            margin: 0 auto;
            width: fit-content;
            text-align: center;
            font-size: 3rem;
            @media (max-width:768px) {
                font-size: 2.4rem;
                
            }

        }
    
    }
`;