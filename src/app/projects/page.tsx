'use client'

import styled from "styled-components"

interface ProjectsProps {

}

const ContainerProjects = styled.div`
    background-color: ${({theme}) => theme.colors.dark.dark};
`
export default function Projects(props : ProjectsProps){
    return(
        <ContainerProjects>
            <h1>Projects...</h1>
        </ContainerProjects>
    )
}