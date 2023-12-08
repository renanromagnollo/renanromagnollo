'use client'

import { CardContent } from "@/components/Cards/CardContent"
import styled from "styled-components"

interface ProjectsProps {

}

const ContainerProjects = styled.section`
    margin: 0;
    padding: 50px 0;
    background-color: ${({theme}) => theme.colors.dark.dark};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    /* grid-template-columns: 1; */
    gap: 5vw;

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