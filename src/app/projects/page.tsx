'use client'

import { CardContent } from "@/components/Cards/CardContent"
import styled from "styled-components"

interface ProjectsProps {

}

const ContainerProjects = styled.section`
    margin: 0;
    padding: 0;
    background-color: ${({theme}) => theme.colors.dark.dark};
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    /* grid-template-columns: 1; */
    gap: 10px;

`
export default function Projects(props : ProjectsProps){
    return(
        <ContainerProjects>
            <CardContent/>
            <CardContent/>
            <CardContent/>
            <CardContent/>
            <CardContent/>
            <CardContent/>
            <CardContent/>
        </ContainerProjects>
    )
}