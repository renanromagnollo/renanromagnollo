import styled from "styled-components"
import { SkillsPercents } from "./SkillsPercents"

interface SkillsDataProps {

}

const SectionSkills = styled.section`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

`

export function SkillsData(props : SkillsDataProps){
    return(
        <SectionSkills>
           <h5>Since beginning my journey as a web developer nearly 11 years ago, I've create digital products for business. I'm always improving my products by knowledge.</h5>
           <div>
                <SkillsPercents/>
           </div>
        </SectionSkills>
    )
}