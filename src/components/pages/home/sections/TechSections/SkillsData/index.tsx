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

p, h5 {
    color: ${({theme}) => theme.colors.light.dark};
    margin: 2vh;
    /* font-size: 1rem; */
}

> div {

}

`

export function SkillsData({select} : SkillsDataProps){
    return(
        <SectionSkills>
           {select ? (
                        <div>
                            <h5>{select?.title}</h5>
                            <p>{select?.text?.text}</p>
                        </div>
                    ) :
                (<div>
                    <h5>Since beginning my journey as a web developer nearly 11 years ago, I've create digital products for business. I'm always improving my products by knowledge.</h5>
                    <div>
                            <SkillsPercents/>
                    </div>
                </div>)
            }
        </SectionSkills>
    )
}