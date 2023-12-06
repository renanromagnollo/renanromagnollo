import styled from "styled-components"
import { TitleSection } from "../TitleSection"
import { CardContent } from "../Cards/CardContent"

interface ProjectsProps {

}

const ProjectsContainer = styled.section`
    width: 100vw;
    background-color: ${({theme}) => theme.colors.dark.light};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
export function Projects(props : ProjectsProps){
    return(
        <ProjectsContainer>
            <TitleSection/>
            <div>
                <CardContent title='Título' text='Text...'/>
            </div>
        </ProjectsContainer>
    )
}