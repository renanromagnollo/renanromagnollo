'use client'

import { CardProject } from "@/components/Cards/CardProject"
import { PathComponent } from "@/components/Path"
import { TitleSection } from "@/components/TitleSection"
import styled from "styled-components"
import { useRouter } from "next/navigation"
import { useContext, useEffect } from "react"
import { DataContext } from "../../context/data-context"
import { CardProjectPage } from "@/components/pages/projects/CardProjectPage"
import { getFakeData } from "@/utils/fakeServer"
import { SectionCards } from "@/components/pages/projects/SectionCards"

interface ProjectsProps {

}

interface ContainerProjects {
    'data-testid': string
}

const ContainerProjects = styled.section<ContainerProjects>`
    margin: 0;
    padding: 50px 0;
    background-color: ${({ theme }) => theme?.colors?.dark?.dark};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    /* grid-template-columns: 1; */
    gap: 5vw;

    > div {
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 50px;
    }

`
export default function Projects(props: ProjectsProps) {

    const { projects, setProjects } = useContext(DataContext)
    // const data = await getFakeData('projects')

    console.log('ProjectsPage rendered!')
    console.log('Context PROJECTS: ', projects)

    useEffect(() => {
        async function upFakeData() {
            const fakeData = async () => await getFakeData('projects')
            const data = await fakeData()
            console.log('fakeDAta PROJECTS: ', data.projects)
            setProjects(data.projects)
        }
        if (projects.length <= 0) upFakeData()
    }, [])

    useEffect(() => {
        console.log('PROJECTS Context changed! ', projects)
    }, [projects])

    return (
        <ContainerProjects data-testid="projects-page">
            <PathComponent />
            <TitleSection title="Projetos" subtitle="Alguns projetos profissionais e de estudo"></TitleSection>
            {/* <SectionCards data={projects} /> */}
            {<div>

                {projects?.map((project, i) => <CardProjectPage key={i} data={project} />)}

            </div>}

        </ContainerProjects>
    )
}