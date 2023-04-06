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
        background: ${({theme}) => theme.colors.primary};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
        background: ${({theme}) =>  lighten(0.4, theme.colors.primary)};
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font: ${props => props.theme.fonts.primary.font};
    }

    img {
        width: 100%;
        max-width: 100%;
    }

    ul {
        list-style: none;
    }

`