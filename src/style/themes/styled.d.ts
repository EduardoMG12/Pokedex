import "styled-components";



declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            backgroundColors: string,
            card: string,
            cardSecundary: string,
            text: string,
        },

        fonts: {}
    }

}