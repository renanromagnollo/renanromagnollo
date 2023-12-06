'use client'

import Link from "next/link"

import GlobalStyle from '../styles/global'
import styled, { ThemeProvider } from "styled-components"
import dark from "@/styles/themes/dark"
import light from "@/styles/themes/light"
import { HeroSection } from "@/components/pages/home/sections/HeroSection"
import { Projects } from "@/components/pages/home/sections/ProjectsSection"
import { BlogSection } from "@/components/pages/home/sections/BlogSection"
import { TechSection } from "@/components/pages/home/sections/TechSections"

const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export default function Home() {
  return (
        <ContainerHome>
          <GlobalStyle />
          <HeroSection/>
          <TechSection/>
          <Projects/>
          <BlogSection/>
          <Link href="/articles">Articles</Link>
        </ContainerHome>


  )
}
