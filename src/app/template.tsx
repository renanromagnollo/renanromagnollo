'use client'

import { Header } from "@/components/Header"
import dark from "@/styles/themes/dark"
import { ThemeProvider } from "styled-components"

export default function Template({children}: {
    children: React.ReactNode
}) {
    return (
        <div>
        <ThemeProvider theme={dark}>
            <Header/>
            {children}
        </ThemeProvider>
        </div>
    )
}