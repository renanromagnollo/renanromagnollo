// import {ButtonHTMLAttributes, ReactNode} from 'react'
import { fontAtributes } from '@/styles/themes/dark'
import {ReactNode} from 'react'
import styled from 'styled-components'

// type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

// export function Button({children, className, ...props} : ButtonProps){
//     return(
//         <button {...props}>
//             {children}
//         </button>
//     )
// }

// interface ButtonProps {
//     children: ReactNode
// }

const buttonFont = fontAtributes('Kanit', 'normal', 400, '2.3rem', '120%')

export const ButtonTag = styled.button`
    width: 200px;
    height: 50px;
    background-color: #0D99FF;
    color: #F3F3F3;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    font-family: 'Kanit';
    font-Style: 'normal';
    font-weight: 400;
    font-size: 1.8rem;
    /* line-height: '120%' */
`

/* export function Button({children} : {children : ButtonProps}){
    return(
        <buttonTag>
            {children}
        </buttonTag>
    )
} */