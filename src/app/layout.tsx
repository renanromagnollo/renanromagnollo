"use client"

import { ContactForm } from "@/components/ContactForm"
import Providers from "@/components/Providers";
import StyledComponentsRegistry from "@/styles/registry"
// import { ThemeProvider } from "styled-components"
// import { dark } from '@/styles/themes/dark';

import GlobalStyle from '../styles/global'
import DataProvider from "@/context/data-context";

const metadata = {
  title: 'Renan Romagnollo',
  description: 'Front-end Developer',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body style={{ margin: '0' }}>
        {/* <StyledComponentsRegistry> */}
        {/* <ThemeProvider theme={dark}> */}
        <Providers>
          <GlobalStyle />
          <DataProvider>
            {children}
          </DataProvider>

        </Providers>
        {/* </ThemeProvider> */}
        {/* </StyledComponentsRegistry> */}
      </body>
    </html>
  )
}
