import { TitleSection } from "@/components/TitleSection"
import styled from "styled-components"
import SkillButton from "./SkillButton"

interface TechSectionProps {
    name: string
}

const ContainerTech = styled.section`
    width: 80%;
    padding: 20px;
    margin: 20px 0;

    /* margin: auto 10vw; */
    background-color: ${({theme}) => theme.colors.dark.light};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;

    > h4 {
        span {
            color: ${({theme}) => theme.colors.primary.default};
        }
    }

`
const ContainerContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 30px;
    /* background-color: blue; */
    gap: 20px;
    
`
const ButtonsSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 15px;
`

const ContentSection = styled.div`
    /* background-color: gray; */
    width: 100%;

    > p {
        color: ${({theme}) => theme.colors.light.dark}
    }
`

export function TechSection({name='TechSection'} : TechSectionProps){
    return(
        <ContainerTech>
            <h4>Tech<span>Skills</span></h4>
            <ContainerContent>
                <ButtonsSection>
                    <SkillButton/>
                    <SkillButton/>
                </ButtonsSection>
                <ContentSection>
                    <h5>{name}</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam sapiente, tempora ratione quod doloribus sequi illum accusantium non ex quas nisi quasi ducimus vel fugiat nesciunt, facilis dignissimos pariatur amet exercitationem alias quisquam corporis iusto deserunt! Doloremque excepturi, esse laudantium magni a cupiditate temporibus ad dolor praesentium pariatur tenetur et quos culpa assumenda deserunt. Numquam voluptate officiis praesentium eum.</p>
                </ContentSection>
            </ContainerContent>
        </ContainerTech>
    )
}