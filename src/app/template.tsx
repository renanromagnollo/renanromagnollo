'use client'

import { Header } from "@/components/Header"
import dark from "@/styles/themes/dark"
import { ThemeProvider } from "styled-components"
import DataProvider from "./context/data-context"

export default function Template({children}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <DataProvider>
                <ThemeProvider theme={dark}>
                    <Header/>
                    {children}
                </ThemeProvider>
            </DataProvider>
        </div>
    )
}