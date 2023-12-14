import styled from "styled-components"
import { SkillsPercents } from "./SkillsPercents"

interface SkillsDataProps {
    select: string
}

const SectionSkills = styled.section`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

`

export function SkillsData({select} : SkillsDataProps){
    return(
        <SectionSkills>
           {select ? (
                        <h4>{select?.title}</h4>
                    ) :
                (<div>
                    <h6>Since beginning my journey as a web developer nearly 11 years ago, I've create digital products for business. I'm always improving my products by knowledge.</h6>
                    <div>
                            <SkillsPercents/>
                    </div>
                </div>)
            }
        </SectionSkills>
    )
}