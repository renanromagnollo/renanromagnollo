import { TitleSection } from "@/components/TitleSection"
import styled from "styled-components"
import SkillButton from "./SkillButton"
import { getFakeData } from "@/utils/fakeServer"
import { SkillsData } from "./SkillsData"
import { useEffect, useState } from "react"

interface TechSectionProps {
    name: string,
    data: any
}

const ContainerTech = styled.div`
    width: 80%;
    padding: 5rem;
    margin: 20px 0;

    /* margin: auto 10vw; */
    background-color: ${({theme}) => theme.colors.dark.light};
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;

    h4 {
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
    justify-content: flex-start;
    align-items: center;
    gap: 3vh;
`
const ContentSection = styled.div`
    /* background-color: gray; */
    width: 100%;

    > p {
        color: ${({theme}) => theme.colors.light.dark}
    }
`

export function TechSection({name='TechSection', data} : TechSectionProps){
    const [selected, setSelected] = useState<any>('')

    const updateSelect = (clicked) => {
        console.log('selected UPDATE: ', clicked)
        setSelected(clicked)
    }

    useEffect(() => {
        if(selected !== '') {
            window.addEventListener('scroll', () => setSelected(''))
            return
        }
    }, [selected])

    return(
        <ContainerTech>
            <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                <h4>Tech<span>Skills</span></h4>
                <ButtonsSection>
                    {data?.techSkills.map((category, i) => <SkillButton key={i} data={category} click={clicked => updateSelect(clicked)}/>)}
                </ButtonsSection>
            </div>
            <ContentSection>
                <SkillsData select={selected}/>
            </ContentSection>
            {/* <ContainerContent>
            </ContainerContent> */}
        </ContainerTech>
    )
}