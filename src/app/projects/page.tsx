'use client'

import { CardProject } from "@/components/Cards/CardProject"
import { PathComponent } from "@/components/Path"
import { TitleSection } from "@/components/TitleSection"
import styled from "styled-components"
import {useRouter} from "next/navigation"

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
    // const params = useRouter()
    // console.log('params: ', params)
    return(
        <ContainerProjects>
            <PathComponent/>
            <TitleSection title="Projetos" subtitle="Alguns projetos profissionais e de estudo"></TitleSection>
            <div>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
            </div>
        </ContainerProjects>
    )
}