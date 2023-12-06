import styled from "styled-components"
import { TitleSection } from "../../../../TitleSection"
import { CardContent } from "../../../../Cards/CardContent"

interface ProjectsProps {

}

const ProjectsContainer = styled.section`
    width: 100vw;
    padding: 8vh 0;
    background-color: ${({theme}) => theme.colors.dark.light};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* gap: 20vh; */
    
    `

const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 4vw;
    padding: 8vh 0;
`
export function Projects(props : ProjectsProps){
    return(
        <ProjectsContainer>
            <TitleSection title="Alguns Projetos" subtitle="Projetos de desenvolvimento de aplicações..." path="/projetos"/>
            <CardsContainer>
                <CardContent title='Título' text='Text...'/>
                <CardContent title='Título' text='Text...'/>
                <CardContent title='Título' text='Text...'/>
            </CardsContainer>
        </ProjectsContainer>
    )
}