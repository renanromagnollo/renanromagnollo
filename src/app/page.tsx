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
import { useContext, useEffect, useState } from "react"
import { getFakeData } from "@/utils/fakeServer"
import DataProvider, { DataContext } from "./context/data-context"

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
  
  const {projects, blog, setProjects, setBlog} = useContext(DataContext)
  
  const [hero, setHero] = useState(null)
  const [techskills, setTechskills] = useState(null)
  // const [projects, setProjects] = useState(null)
  // const [blog, setBlog] = useState(null)


  
  useEffect(() => {
    const allQueries = async () => {
      // const hero = await getHeroData()
      const hero = await getFakeData('hero')
      if(hero) setHero(hero)
      const techskills = await getFakeData('techskills')
      if(techskills) setTechskills(techskills)
      const projects = await getFakeData('projects')
      if(projects) setProjects(projects)
      const blog = await getFakeData('blog')
      if(blog) setBlog(blog)
  
    }
    allQueries()
    return console.log('allQueries done!')
    
  }, [])

  // useEffect(() => console.log('techsKills state: ', techskills), [techskills])


  return (
    <ContainerHome>
          <GlobalStyle />
          {/* <HeroSection text={hero?.hero?.text?.text}/> */}
          <HeroSection text={hero?.hero?.text?.text} />
          <TechSection data={techskills}/>
          <Projects data={projects}/>
          <BlogSection data={blog}/>
          <Link href="/articles">Articles</Link>
        </ContainerHome>



  )
}
