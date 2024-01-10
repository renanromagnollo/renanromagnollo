'use client'

import { Header } from "@/components/Header"
import dark from "@/styles/themes/dark"
// import { ThemeProvider } from "styled-components"
import DataProvider from "../context/data-context"
import { PathComponent } from "@/components/Path"

export default function Template({ children }: {
    children: React.ReactNode
}) {
    return (
        <div>
            {/* <DataProvider> */}
            {/* <ThemeProvider theme={dark}> */}
            {/* <DataProvider> */}
            <Header />
            <PathComponent />

            {children}
            {/* </DataProvider> */}
            {/* </ThemeProvider> */}
            {/* </DataProvider> */}
        </div>
    )
}