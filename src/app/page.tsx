'use client'

import Link from "next/link"

import GlobalStyle from '../styles/global'
import { ThemeProvider } from "styled-components"
import dark from "@/styles/themes/dark"
import light from "@/styles/themes/light"

export default function Home() {
  return (
    <ThemeProvider theme={dark}>
      <div>
          <GlobalStyle />
          <h1>Hello World</h1>
          <Link href="/articles">Articles</Link>
        </div>
    </ThemeProvider>


  )
}
