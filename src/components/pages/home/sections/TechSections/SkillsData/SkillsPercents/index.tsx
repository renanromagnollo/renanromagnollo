import styled from "styled-components"
import { SkillDisplay } from "./SkillDisplay"

interface SkillPercentProps {
    
}

const ContainerSkillsPercents = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
`
export function SkillsPercents(props : SkillPercentProps){
    return(
        <ContainerSkillsPercents>
            <SkillDisplay title="Figma" percent={84}/>
            <SkillDisplay title="Typescript" percent={74}/>
            <SkillDisplay title="ReactJS / NextJS" percent={90}/>
            <SkillDisplay title="Styled Components" percent={65}/>
            <SkillDisplay title="Tailwind" percent={27}/>
            <SkillDisplay title="APIs" percent={58}/>
           
        </ContainerSkillsPercents>
    )
}