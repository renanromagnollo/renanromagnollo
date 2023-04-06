interface fontAtributesProps {
    fontFamily: string, 
    fontStyle: string, 
    fontWeight: number, 
    fontSize: string, 
    lineHeight: string
}

function fontAtributes(fontFamily: string, fontStyle: string, fontWeight: number, 
                        fontSize: string, lineHeight: string): fontAtributesProps {
    return {
        fontFamily,
        fontStyle,
        fontWeight,
        fontSize,
        lineHeight
    }
}


export default {
    title: 'dark',

    fonts: {
        h1: fontAtributes('Kanit', 'normal', 400, '4.8rem', '110%'),
        h2: fontAtributes('Kanit', 'normal', 400, '4rem', '110%'),
        h3: fontAtributes('Nunito', 'normal', 500, '3.3rem', '110%'),
        h4: fontAtributes('Nunito', 'normal', 500, '2.8rem', '120%'),
        h5: fontAtributes('Kanit', 'normal', 400, '2.3rem', '120%'),
        h6: fontAtributes('Kanit', 'normal', 400, '1.9rem', '120%'),
        h6Bold: fontAtributes('Kanit', 'normal', 700, '1.9rem', '120%'),
        p: fontAtributes('Quicksand', 'normal', 400, '1.6rem', '150%'),
        pBold: fontAtributes('Quicksand', 'normal', 700, '1.6rem', '150%'),
        small: fontAtributes('Quicksand', 'normal', 400, '1.3rem', '150%'),
        smallBold: fontAtributes('Quicksand', 'normal', 700, '1.3rem', '150%'),
    },

    colors: {
        primary: {
            default: '#0D99FF',
            light: '#5EB1ED',
            dark: '#0076CC'
        },
        secundary: {
            default: '#FF6926',
            light: '#FF9566',
            dark: '#CC3F00'
        },
        terciary: {
            default: '#8500F2',
            light: '#AF4CFF',
            dark: '#6109AA'
        },
        actions: {
            sucess: '#45DE45',
            danger: '#DA0E0F',
            disable: '#E7EAEE'
        },
        dark: {
            default: '#2D2E32',
            light: '#25262A',
            dark: '#1D1D20'
        },
        light: {
            default: '#F3F3F3',
            dark: '#878B92'
        },
        background: '#1D1D20',
        text: '#2D2E32'
    }
} 