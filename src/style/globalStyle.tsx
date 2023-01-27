import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        overflow-x: hidden;
    }

    body{
    background-color: ${props => props.theme.colors.backgroundColors};
    
    }
`;