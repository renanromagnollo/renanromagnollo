"use client"
import dark from "@/styles/themes/dark";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export default function Template({children}: {children: ReactNode}) {
    return (
        <div>
            <ThemeProvider theme={dark}>
                {children}
            </ThemeProvider>

        </div>
    )
}