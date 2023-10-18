import {ButtonHTMLAttributes} from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({children, className, ...props} : ButtonProps){
    return(
        <button {...props}>
            {children}
        </button>
    )
}