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
import { fetchHygraphQuery } from "@/utils/fetchHygraph"
import { useEffect, useState } from "react"

const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const getHeroData = async () => {
  const query = `
  query MyQuery {
      hero(where: {slug: "whoami"}) {
        title {
          raw
        }
        subtitle {
          raw
        }
        text {
          text
        }
      }
    }
  `

  // console.log('heroQuery: ', query)
  return fetchHygraphQuery(query)
}

export default function Home() {
  
  const [hero, setHero] = useState(null)

  
  useEffect(() => {
      const heroQuery = async () => {
        const response = await getHeroData()
        if(response) setHero(response)
    
        console.log('heroQuery: ', response)
    
        return response
    
      }
      heroQuery()
    
  }, [])

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
