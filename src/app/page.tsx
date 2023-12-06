'use client'

import Link from "next/link"

import GlobalStyle from '../styles/global'
import { ThemeProvider } from "styled-components"
import dark from "@/styles/themes/dark"
import light from "@/styles/themes/light"
import { HeroSection } from "@/components/pages/home/sections/HeroSection"
import { Projects } from "@/components/pages/home/sections/ProjectsSection"
import { BlogSection } from "@/components/pages/home/sections/BlogSection"

export default function Home() {
  return (
        <div>
          <GlobalStyle />
          <HeroSection/>
          <Projects/>
          <BlogSection/>
          <Link href="/articles">Articles</Link>
        </div>


  )
}
