import styled from "styled-components"
import { TitleSection } from "../TitleSection"

interface ProjectsProps {

}

const Container = styled.section`
    width: 100vw;
    background-color: ${({theme}) => theme.colors.dark.light};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
export function Projects(props : ProjectsProps){
    return(
        <Container>
            <TitleSection/>
        </Container>
    )
}