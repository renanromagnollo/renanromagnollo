'use client'

import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { dark } from '../../styles/themes/dark'

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')

    return (
        <ThemeProvider theme={dark}>
          {children}
        </ThemeProvider>
    )
}