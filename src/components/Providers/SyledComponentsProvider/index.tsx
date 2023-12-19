"use client"

import { ThemeProvider } from "styled-components";
import  dark  from '@/styles/themes/dark';
import StyledComponentsRegistry from "@/styles/registry";
import { ReactNode } from "react";


export default function StyledComponentsProvider({children} : {children: ReactNode}){
    return(
        <StyledComponentsRegistry>
            <ThemeProvider theme={dark}>
                    {children}
            </ThemeProvider>        
        </StyledComponentsRegistry>
    )
}