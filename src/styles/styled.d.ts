import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

    fonts: {
        primary: {
            font: string
        }
    },

    colors: {
        primary: string,
        secundary: string,
        background: string,
        text: string
    }
    }
}