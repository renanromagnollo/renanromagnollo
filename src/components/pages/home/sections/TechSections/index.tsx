import { TitleSection } from "@/components/TitleSection"
import styled from "styled-components"
import SkillButton from "./SkillButton"
import { getFakeData } from "@/utils/fakeServer"

interface TechSectionProps {
    name: string,
    data: any
}

const ContainerTech = styled.div`
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

export function TechSection({name='TechSection', data} : TechSectionProps){

    // const tech = await getFakeData('techskills')
    // console.log('tech: ', tech)
    console.log('techs data: ', data?.techSkills)

    return(
        <ContainerTech>
            <h4>Tech<span>Skills</span></h4>
            <ContainerContent>
                <ButtonsSection>
                    {data?.techSkills.map((t, i) => <SkillButton key={i} title={t.title} subtitle={t.subtitle}/>)}
                    {/* <SkillButton/>
                    <SkillButton/> */}
                </ButtonsSection>
                <ContentSection>
                <h5>{name}</h5>
                    <p>Interface...</p>
                </ContentSection>
            </ContainerContent>
        </ContainerTech>
    )
}