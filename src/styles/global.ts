
import { lighten } from 'polished'
import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    :root {
        font-size: 62.5%;
    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.colors.background};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
        background: ${({theme}) =>  theme.colors.dark.light};
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }

    img {
        width: 100%;
        max-width: 100%;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
    
    h1 {
        font-family: ${({theme}) => theme.fonts.h1.fontFamily};
        font-weight: ${({theme}) => theme.fonts.h1.fontWeight};
        font-size: ${({theme}) => theme.fonts.h1.fontSize};
        line-height: ${({theme}) => theme.fonts.h1.lineHeight};
    }
    h2 {
        font-family: ${({theme}) => theme.fonts.h2.fontFamily};
        font-weight: ${({theme}) => theme.fonts.h2.fontWeight};
        font-size: ${({theme}) => theme.fonts.h2.fontSize};
        line-height: ${({theme}) => theme.fonts.h2.lineHeight};
    }
    h3 {
        font-family: ${({theme}) => theme.fonts.h3.fontFamily};
        font-weight: ${({theme}) => theme.fonts.h3.fontWeight};
        font-size: ${({theme}) => theme.fonts.h3.fontSize};
        line-height: ${({theme}) => theme.fonts.h3.lineHeight};
    }
    h4 {
        font-family: ${({theme}) => theme.fonts.h4.fontFamily};
        font-weight: ${({theme}) => theme.fonts.h4.fontWeight};
        font-size: ${({theme}) => theme.fonts.h4.fontSize};
        line-height: ${({theme}) => theme.fonts.h4.lineHeight};
    }
    h5 {
        font-family: ${({theme}) => theme.fonts.h5.fontFamily};
        font-weight: ${({theme}) => theme.fonts.h5.fontWeight};
        font-size: ${({theme}) => theme.fonts.h5.fontSize};
        line-height: ${({theme}) => theme.fonts.h5.lineHeight};
    }
    h6 {
        font-family: ${({theme}) => theme.fonts.h6.fontFamily};
        font-weight: ${({theme}) => theme.fonts.h6.fontWeight};
        font-size: ${({theme}) => theme.fonts.h6.fontSize};
        line-height: ${({theme}) => theme.fonts.h6.lineHeight};
    }
    p {
        font-family: ${({theme}) => theme.fonts.p.fontFamily};
        font-weight: ${({theme}) => theme.fonts.p.fontWeight};
        font-size: ${({theme}) => theme.fonts.p.fontSize};
        line-height: ${({theme}) => theme.fonts.p.lineHeight};
    }


    .container {
        width: 100%;
        margin: 0 auto;

        @media(max-width: 1450px) {
            
        }
        @media(max-width: 1000px) {

        }
        @media(max-width: 700px) {

        }
    }

`