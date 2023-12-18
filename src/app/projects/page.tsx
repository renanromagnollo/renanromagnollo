'use client'

import { CardProject } from "@/components/Cards/CardProject"
import { PathComponent } from "@/components/Path"
import { TitleSection } from "@/components/TitleSection"
import styled from "styled-components"
import {useRouter} from "next/navigation"
import { useContext } from "react"
import { DataContext } from "../../context/data-context"

interface ProjectsProps {

}

const ContainerProjects = styled.section`
    margin: 0;
    padding: 50px 0;
    background-color: ${({theme}) => theme.colors.dark.dark};
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
export default function Projects(props : ProjectsProps){

    const {projects} = useContext(DataContext)
    console.log('CONTEXT projects :', projects)
    // const params = useRouter()
    // console.log('params: ', params)
    return(
        <ContainerProjects>
            <PathComponent/>
            <TitleSection title="Projetos" subtitle="Alguns projetos profissionais e de estudo"></TitleSection>
            <div>
                {projects?.map(project => <CardProject key={project.slug} project={project}/>)}
            </div>
        </ContainerProjects>
    )
}