import { TitleSection } from "@/components/TitleSection"
import styled from "styled-components"
import SkillButton from "./SkillButton"

interface TechSectionProps {
    name: string
}

const ContainerTech = styled.section`
    width: 80%;
    padding: 20px;
    /* margin: auto 10vw; */
    background-color: ${({theme}) => theme.colors.dark.light};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;

    > h2 {
        span {
            color: ${({theme}) => theme.colors.primary.default};
        }
    }

`


const ContainerContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80vw;
    /* gap: 20px; */
    
    `
    const ButtonsSection = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 10px;
        /* padding: 20px auto; */
    `

export function TechSection({name='TechSection'} : TechSectionProps){
    return(
        <ContainerTech>
            <h2>Tech<span>Skills</span></h2>
            <ContainerContent>
                <ButtonsSection>
                    <SkillButton/>
                    <SkillButton/>
                </ButtonsSection>
                <div>
                    Skill content...
                </div>
            </ContainerContent>
        </ContainerTech>
    )
}