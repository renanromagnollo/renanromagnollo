"use client"

import { ContactForm } from "@/components/ContactForm"
import Providers from "@/components/Providers";
import StyledComponentsRegistry from "@/styles/registry"
// import { ThemeProvider } from "styled-components"
// import DataProvider from "../components/context/data-context"
// import { dark } from '@/styles/themes/dark';

import GlobalStyle from '../styles/global'

const metadata = {
  title: 'Renan Romagnollo',
  description: 'Front-end Developer',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body style={{ margin: '0' }}>
        {/* <DataProvider> */}
        {/* <StyledComponentsRegistry> */}
        {/* <ThemeProvider theme={dark}> */}
        <Providers>
          <GlobalStyle />
          {children}
          <ContactForm />

        </Providers>
        {/* </ThemeProvider> */}
        {/* </StyledComponentsRegistry> */}
        {/* </DataProvider> */}
      </body>
    </html>
  )
}
